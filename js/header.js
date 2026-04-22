class MainHeader extends HTMLElement {
    connectedCallback() {
        const currentPath = window.location.pathname;
        const isGames = currentPath.includes("games");
        const isMods = currentPath.includes("mods");
        const isHome = currentPath === "/" || currentPath.endsWith("/") || currentPath.includes("index") || (!isGames && !isMods);

        this.innerHTML = `
        <header>
            <div class="nav-container">
                
                <div class="logo-wrapper">
                    <a href="index.html" class="logo">Arixerius<span>.dev</span></a>
                    
                    <a href="https://www.linkedin.com/in/emreki" target="_blank" class="social-icon" title="LinkedIn">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                            <rect x="2" y="9" width="4" height="12"></rect>
                            <circle cx="4" cy="4" r="2"></circle>
                        </svg>
                    </a>
                    
                    <a href="https://github.com/Arixerius" target="_blank" class="social-icon" title="GitHub">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                        </svg>
                    </a>
                </div>

                <button class="menu-toggle" aria-label="Toggle navigation">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <line x1="3" y1="12" x2="21" y2="12"></line>
                        <line x1="3" y1="6" x2="21" y2="6"></line>
                        <line x1="3" y1="18" x2="21" y2="18"></line>
                    </svg>
                </button>

                <ul class="nav-links">
                    <li><a href="index.html" class="${isHome ? 'active' : ''}">Home</a></li>
                    <li><a href="games.html" class="${isGames ? 'active' : ''}">Games</a></li>
                    <li><a href="mods.html" class="${isMods ? 'active' : ''}">Game Mods</a></li>
                </ul>
            </div>
        </header>
        `;

        const menuToggle = this.querySelector('.menu-toggle');
        const navLinks = this.querySelector('.nav-links');

        if(menuToggle && navLinks) {
            menuToggle.addEventListener('click', () => {
                navLinks.classList.toggle('active-menu');
            });
        }
    }
}

customElements.define('main-header', MainHeader);