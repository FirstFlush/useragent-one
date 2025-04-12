<script lang="ts">
    export let href: string;
    export let className: string = "";
    export let external: boolean = false;
</script>

<a 
    href={href} 
    class="nav-link text-sm/6 tracking-wide font-semibold text-slate-700 {className}"
    target={external ? "_blank" : null}
    rel={external ? "noopener noreferrer" : null}
>
    <slot />
</a>
