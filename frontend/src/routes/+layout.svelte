<script lang="ts">
    import '../app.css';
    import Header from "../components/nav/Header.svelte";
    import Footer from '../components/nav/Footer.svelte';
</script>

<Header />

<main>
    <slot />
</main>

<Footer />