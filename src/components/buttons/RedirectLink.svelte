<script>
  import { scrollTop } from '../../lib/utils';

  export let text, handleClick;

  const handleClickAndScroll = () => {
    scrollTop();
    handleClick();
  };
</script>

<button
  class="bg-transparent cursor-pointer text-white border-none underline mb-2 text-sm"
  on:click={handleClickAndScroll}
>
  {text}
</button>
