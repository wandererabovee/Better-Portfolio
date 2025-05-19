<script context="module">
  export async function load() {
    throw redirect(307, '/home');
  }
</script>
