<script>
  const isExtension = chrome?.runtime?.id ?? false;
</script>

<h1>Hello from Svelte!</h1>
<p>
  I am running as a
  <span class="important">browser {isExtension ? "extension" : "tab"}</span>
  and
  <!-- svelte-ignore missing-declaration -->
  <span class="important">{isProduction ? "" : "not"} in production mode!</span>
</p>
{#if isExtension}
  <button on:click={() => window.close()}>Close Popup</button>
{/if}

<style>
  :global(body) {
    width: 300px;

    margin: 0;
    padding: 20px;

    box-sizing: border-box;

    font-family: "Poppins", sans-serif;
    font-size: 14px;
  }

  h1 {
    margin-top: 0;

    color: #ff3e00;
    font-weight: 600;
  }

  button {
    width: 100%;

    margin-top: 25px;
    padding: 10px 15px;

    font-size: 14px;
    font-weight: 700;
    color: #ff3e00;

    border: #ff3e00 solid 1px;
    border-radius: 35px;

    background-color: transparent;

    cursor: pointer;
  }

  .important {
    color: #ff3e00;
    font-weight: 700;
  }
</style>
