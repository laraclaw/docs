#!/usr/bin/env bash
#
# Build the docs and publish them to the bluegrass droplet.
#
#   ./deploy/deploy.sh
#
# Assumes an ssh host alias called "bluegrass". Nothing here needs root: the
# nico user owns /var/www, so only the one-off nginx and certbot steps in
# laraclaw.ai.nginx.conf need sudo.

set -euo pipefail

HOST="${DOCS_SSH_HOST:-bluegrass}"
REMOTE_DIR="${DOCS_REMOTE_DIR:-/var/www/laraclaw.ai/public}"

cd "$(dirname "$0")/.."

echo "==> Building"
npm run generate

if [ ! -f .output/public/index.html ]; then
    echo "Build produced no index.html, refusing to deploy." >&2
    exit 1
fi

echo "==> Publishing to ${HOST}:${REMOTE_DIR}"
rsync -az --delete --checksum .output/public/ "${HOST}:${REMOTE_DIR}/"

echo "==> Verifying"
curl -fsS -o /dev/null -w "  https://laraclaw.ai/ -> %{http_code}\n" https://laraclaw.ai/ \
    || echo "  (site not reachable yet, which is expected until DNS and TLS are set up)"

echo "==> Done"
