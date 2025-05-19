<section class="hero">
  <div class="hero-inner">
    <div class="text-box">
      <h1>Hey, I'm Mike</h1>
      <p>
        A hobbyist developer who just wants to make cool stuff for the web.
      </p>
    </div>

    <div class="avatar">
      <img src="/my-face.png" alt="Pixel avatar" />
    </div>
  </div>

  <!-- Latest Posts Section -->
  <div class="section-header">
    <h2>Latest Posts</h2>
    <a href="/blog" class="view-all">View all</a>
  </div>
  <ul class="post-list">
    <li>About Me</li>
    <li>Learning Linux</li>
    <li>How I Built This Site</li>
    <li>Notes on JavaScript</li>
    <li>Getting into Frontend</li>
  </ul>

  <!-- Latest Projects Section -->
  <div class="section-header">
    <h2>Latest Projects</h2>
    <a href="/projects" class="view-all">View all</a>
  </div>
  <ul class="project-list">
    <li>Personal Portfolio</li>
    <li>Blog Engine</li>
    <li>Pixel Art Generator</li>
    <li>CSS Grid Sandbox</li>
    <li>StandWithUkraine.com</li>
  </ul>
</section>

<style>
  .hero {
    background-color: #1e3b5a;
    color: white;
    padding: 4rem 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .hero-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 800px;
    width: 100%;
    gap: 3rem;
    margin-bottom: 3rem;
  }

  .text-box {
    flex: 1;
    text-align: center;
  }

  h1 {
    font-size: 2.8rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.5;
    max-width: 100%;
  }

  .avatar img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
  }

  .section-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 800px;
    width: 100%;
    margin: 2rem 0 1rem;
  }

  .section-header h2 {
    font-size: 1.8rem;
  }

  .view-all {
    padding: 0.4rem 1rem;
    border: 2px solid #2a4f6d;
    border-radius: 6px;
    color: white;
    text-decoration: none;
    transition: background 0.3s;
  }

  .view-all:hover {
    background-color: #2a4f6d;
  }

  .post-list,
  .project-list {
    list-style: none;
    padding-left: 0;
    margin: 0 0 2rem;
    max-width: 800px;
    width: 100%;
  }

  .post-list li,
  .project-list li {
    padding: 0.5rem 0;
    border-bottom: 1px solid #2a4f6d;
    color: white;
  }
</style>
