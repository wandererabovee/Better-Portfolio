<script>
  export let title;
  export let subtitle;
  export let image;
  export let slotContent; 
</script>

<section class="page-hero">
  <div class="hero-content">
    <div class="text">
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
    <img src={image} alt="hero image" />
  </div>

  <slot /> <!-- for dynamic section content -->
</section>

<style>
  .page-hero {
    background-color: #1e3b5a;
    color: white;
    padding: 4rem 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .hero-content {
    max-width: 800px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
    margin-bottom: 3rem;
    width: 100%;
  }

  .text {
    text-align: center;
  }

  h1 {
    font-size: 2.8rem;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1.1rem;
  }

  img {
    width: 150px;
    height: 150px;
    border-radius: 8px;
  }
</style>
