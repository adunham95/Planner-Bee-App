<script lang="ts">
    interface Props{
        headline: string;
        description: string;
        imageURL: string;
    }

    const {headline, description, imageURL}: Props = $props()
</script>


<div class="bg-white">
<div class="relative">
    <div aria-hidden="true" class="absolute hidden h-full w-1/2 bg-gray-100 lg:block"></div>
    <div class="relative bg-gray-100 lg:bg-transparent">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:grid lg:grid-cols-2 lg:px-8">
        <div class="mx-auto max-w-2xl py-24 lg:max-w-none lg:py-64">
          <div class="lg:pr-16">
            <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl xl:text-6xl">{headline}</h1>
            <p class="mt-4 text-xl text-gray-600">{description}</p>
            
          </div>
        </div>
      </div>
    </div>
    <div class="h-48 w-full sm:h-64 lg:absolute lg:top-0 lg:right-0 lg:h-full lg:w-1/2">
      <img src={imageURL} alt="" class="size-full object-cover">
    </div>
  </div>
</div>
