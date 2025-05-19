<script>
  import { page } from '$app/stores';
</script>

<nav class="navbar">
  <div class="navbar-inner">
    <div class="nav-left">
      <a href="/" class:active={$page.url.pathname === '/'}>Home</a>
      <a href="/blog" class:active={$page.url.pathname === '/blog'}>Blog</a>
      <a href="/projects" class:active={$page.url.pathname === '/projects'}>Projects</a>
    </div>

    <div class="nav-right">
      <a href="https://youtube.com" target="_blank" aria-label="YouTube">🎥</a>
      <a href="https://github.com" target="_blank" aria-label="GitHub">🐙</a>
      <a href="https://twitter.com" target="_blank" aria-label="Twitter">🐦</a>
    </div>
  </div>
</nav>

<style>
  .navbar {
    padding: 1rem 0;
  }

  .navbar-inner {
    max-width: 800px;
    margin: 0 auto;
    padding: 0 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .nav-left a,
  .nav-right a {
    margin: 0 0.5rem;
    padding: 0.5rem 1rem;
    border: 2px solid #2a4f6d;
    border-radius: 8px;
    color: white;
    text-decoration: none;
    transition: background 0.3s, transform 0.2s;
  }

  .nav-left a:hover,
  .nav-right a:hover {
    background-color: #2a4f6d;
    transform: scale(1.05);
  }

  .active {
    background-color: #2a4f6d;
  }

  .nav-left,
  .nav-right {
    display: flex;
    align-items: center;
  }
</style>
