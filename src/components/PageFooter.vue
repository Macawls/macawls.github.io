<template>
    <div class="footer">
      <div class="copyright">
        <p>© {{ new Date().getFullYear() }} Macawls ʕ•ᴥ•ʔ&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;<a
            style="all: unset; cursor: pointer; color: var(--blue); font-weight: 800;" target=”_blank”
            href="https://github.com/Macawls/macawls.github.io">Source&nbsp;&nbsp;<i
              class="devicon-github-original"></i></a></p>
      </div>
    </div>
</template>

<style scoped>
.footer {
    margin-top: auto;
    flex-direction: column;
    justify-content: space-between;
}

.copyright {
    font-size: small;
}

@media (max-width: 707px) {
    .copyright {
        font-size: smaller;
    }
}
</style>