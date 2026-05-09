<script setup lang="ts">
interface Feature {
  title: string
  description: string
  icon?: string
}

defineProps<{
  features: Feature[]
}>()
</script>

<template>
  <section class="border-b border-default">
    <div class="grid gap-px bg-default sm:grid-cols-2 lg:grid-cols-3">
      <div
        v-for="feature in features"
        :key="feature.title"
        class="relative bg-default p-6 sm:p-8"
      >
        <div class="flex size-10 items-center justify-center rounded-lg border border-default bg-elevated">
          <UIcon
            :name="feature.icon || 'i-lucide-sparkles'"
            class="size-5 text-primary"
          />
        </div>
        <h3 class="mt-4 text-base font-semibold text-highlighted">
          {{ feature.title }}
        </h3>
        <p class="mt-2 text-sm/6 text-muted">
          {{ feature.description }}
        </p>
      </div>
    </div>
  </section>
</template>
