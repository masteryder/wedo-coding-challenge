<script lang="typescript">
  export let name: string;
  export let label: string;
  export let type: string = 'text';
  export let icon: string = null;
  export let id: string;
  export let placeholder: string;
  export let unit: string = null;
  export let value: any;

  const handleInput = e => {
    value = type.match(/^(number|range)$/)
      ? +e.target.value
      : e.target.value;
  };
</script>

<div class="mb-5">
  <label for="{name}" class="block text-sm font-medium text-gray-700">{label}</label>
  <div class="mt-1 relative rounded-md shadow-sm">
    {#if icon != null}
    <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
      <span class="text-gray-500 sm:text-sm">
        {@html icon}
      </span>
    </div>
    {/if}
    <input {type} {name} {id} class="focus:ring-indigo-500 block w-full{icon != null ? ' pl-10' : ''} pr-12 sm:text-sm border-gray-300 rounded-md" placeholder="{placeholder}" {value} on:input={handleInput}>
    {#if unit != null}
      <div class="absolute inset-y-0 right-0 flex items-center">
        <div class="my-auto py-0 pl2 pr-4 text-gray-500 sm:text-sm rounded-md">{unit}</div>
      </div>
    {/if}
  </div>
</div>