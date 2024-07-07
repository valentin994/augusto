<script>
    let isMenuOpen = false;
    import { page } from '$app/stores';
    import { browser } from '$app/environment';

    $: if (browser) document.body.classList.toggle("noscroll", isMenuOpen);
	$: href = $page.url.pathname;
    

</script>
<nav class="px-4 md:px-16 ">
      <div class="flex items-center justify-between w-full">
        <a href="/" class="px-4 min-w-24 text-xl text-white z-20" on:click={() => isMenuOpen=false}>
            Augusto
        </a>
        <div class="text-secondary hidden md:max-[4200px]:block md:text-md z-20">
          <ul class="flex h-full">
            <li class="px-2 py-6 ">
              <a href="/" class={`font-bold transition-all duration-300 ease-in hover:text-gray-200 ${href.includes("/") ?
              "text-white" : ""}`}  class:active="{href.includes('/')}">POČETNA</a>
            </li>
            <li class="px-2 py-6">
              <a href="/about" class="font-bold transition-all duration-300 ease-in hover:text-gray-200">O NAMA</a>
            </li>
            <li class="px-2 py-6 ">
              <a href="/coffee" class="font-bold transition-all duration-300 ease-in hover:text-gray-200">KAVE</a>
            </li>
            <li class="px-2 py-6 ">
              <a href="/contact" class="font-bold transition-all duration-300 ease-in hover:text-gray-200">KONTAKT</a>
            </li>
          </ul>
        </div>
        <div class="min-w-24 hidden md:max-[4200px]:block">
        </div>
        <button
          name="Contact call to action"
          class="md:hidden m-4 flex top-0 right-0 z-50 relative w-10 h-10 text-textcol focus:outline-none"
          on:click={()=> isMenuOpen = !isMenuOpen}
        >
          <div class="absolute w-5 transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
            <span
              class={`absolute h-0.5 w-5 bg-secondary transform transition duration-300 ease-in-out ${
                isMenuOpen ? "rotate-45  delay-200 bg-textcol" : "-translate-y-1.5"
              }`}
            ></span>
            <span
              class={`absolute h-0.5 bg-secondary  transform transition-all duration-200 ease-in-out ${
                isMenuOpen ? "w-0 opacity-50" : "w-5 delay-200 opacity-100"
              }`}
            ></span>
            <span
              class={`absolute h-0.5 w-5 bg-secondary transform transition duration-300 ease-in-out ${
                isMenuOpen ? "-rotate-45 bg-textcol delay-200" : "translate-y-1.5"
              }`}
            ></span>
          </div>
        </button>
      </div>

    <nav
        class={`fixed flex top-0 left-0 w-full z-40 h-screen bg-background text-primary bg-opacity-100 transform delay-100 transition-all duration-500 ${
          isMenuOpen
            ? "opacity-100 translate-x-0"
            : "opacity-0 -translate-x-full"
        }`}
      >
        <ul class="flex flex-col items-center w-full justify-center align-middle text-center text-textcol">
          <li class="text-2xl p-4">
            <a on:click={() => isMenuOpen = false}
              href="/"
            >
              Pocetna
            </a>
          </li>
          <li class="text-2xl p-4">
            <a on:click={() => isMenuOpen = false}
              href="/about"
              class="nav-link"
            >
              O nama
            </a>
          </li>
          <li class="text-2xl p-4">
            <a on:click={() => isMenuOpen = false}
              href="/gallery"
              class="nav-link"
            >
              Kave
            </a>
          </li>
          <li class="text-2xl p-4">
            <a on:click={() => isMenuOpen = false}
              href="/contact"
              class="nav-link"
            >
              Kontakt
            </a>
          </li>
        </ul>
      </nav>
    </nav>
