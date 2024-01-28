<template>
        <div class="theme-toggle" :class="{ hidden: isHidden }">
            <div class="toggle-box animate__animated animate__fadeInRightBig" @click="toggle">
                <div class="toggle-circle" :class="{ dark: isDark }">
                    <img style="padding: 15%; width: 100%;" :src="isDark ? '/moon.svg' : '/sun.svg'" alt="Toggle theme" />
                </div>
                <p class="title"> {{ isDark ? "Dark" : "Light" }}</p>
            </div>
        </div>
</template>


<script>
export default {
    name: 'ThemeToggle',
    props: {
        switch: {
            type: Function,
            required: true,
        },
        isDark: {
            type: Boolean,
            required: true,
        }
    },
    data() {
        return {
            isHidden: false,
        };
    },
    created() {
        window.addEventListener('scroll', this.handleScroll);
    },
    unmounted() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        toggle() {
            this.switch();
        },
        handleScroll() {
            const scrollY = window.scrollY;
            const threshold = 30;
            this.isHidden = scrollY > threshold;
        },
    },
};
</script>
  
<style scoped>
.theme-toggle.hidden {
    transform: translateY(-300%);
}

.theme-toggle {
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 9999;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    -webkit-tap-highlight-color: transparent;
    transition: transform 0.3s ease-in-out;
}

.title {
    position: relative;
    top: 40px;
    left: 20px;
    font-size: smaller;
}

.toggle-box {
    position: relative;
    width: 70px;
    height: 30px;
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;
    user-select: none;
}

.toggle-circle img {
    transition: transform 0.2s ease-in-out, rotate 0.3s ease-in-out, scale 0.5s ease-in-out;
}

[theme='dark'] .toggle-circle img {
    transform: rotate(33deg) scale(-1);
}

[theme='light'] .toggle-circle img {
    transform: rotate(0deg) scale(1);
}

.toggle-circle {
    position: absolute;
    top: -1px;
    left: -3px;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.1s ease-in-out, background-color 0.3s ease-in-out, border 0.3s ease-in-out;
}

[theme='dark'] .toggle-box {
    background-color: var(--toggle-box-dark);
}

[theme='light'] .toggle-box {
    background-color: var(--toggle-box-light);
}

[theme='dark'] .toggle-circle {
    transform: translateX(43px);
    background-color: var(--toggle-circle-dark);
}

[theme='light'] .toggle-circle {
    transform: translateX(0);
    background-color: var(--toggle-circle-light);
}

@media (max-width: 768px) {
    .toggle-box {
        width: 50px;
        height: 25px;
    }

    .title {
        left: 10px;
    }

    [theme='dark'] .toggle-circle {
        transform: translateX(30px);
    }

    .toggle-circle {
        width: 27px;
        height: 27px;
        top: -1px;
        left: -4px;
    }

    .span {
        font-size: 0.3rem;
    }
}

@media (max-width: 480px) {}
</style>
  