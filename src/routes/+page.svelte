<script>
    import About from "$lib/assets/about.png";
    import CoffeeBag from "$lib/assets/coffeebag.png";
    import Matcha from "$lib/assets/matcha.jpg";
</script>
<div class="flex pt-20 px-8 w-full bg-accent bg-[url('/mlin.jpg')] bg-cover bg-center object-fill bg-no-repeat -mt-20
            relative
            before:content-['']
            overflow-hidden
            z-10
            before:absolute
            before:inset-0
            before:block
            before:bg-gradient-to-r
            before:from-accent
            before:to-textcol
            before:opacity-80
            before:z-[-5]">

    <div class="px-4 py-8 md:px-12 md:py-24 max-w-[800px]">
        <h2 class="text-background py md:py-0 font-thin md:text-2xl">Lorem ipsum</h2>
        <h1 class="text-gray-50 pb-2 text-xl font-bold py md:py-2 md:text-2xl">ZAPOČNITE DAN S KAVOM</h1>
        <p class="text-white text-md md:text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nisi quam, finibus quis tortor pulvinar, malesuada feugiat eros. Integer malesuada diam ut libero fermentum, id tristique nunc luctus. Vestibulum nisi lectus, aliquam dapibus sem eu, laoreet laoreet turpis. Cras scelerisque vestibulum auctor. Maecenas interdum purus dui, non dignissim neque varius eu. Phasellus viverra sed enim non dignissim. Cras lobortis ullamcorper metus vel posuere. Etiam vel nulla ac purus venenatis finibus. </p>
        <div class="pt-8 pb-2 text-center md:text-left">
            <button class="py-2 px-8 text-white transition-all duration-100 ease-in hover:text-white hover:bg-textcol bg-primary text-xl rounded-md font-semibold">Istražite nase kave</button>
        </div>
    </div>
</div>
<div class="px-8 py-12 md:grid md:grid-cols-2 lg:px-36">
    <div class="col-span-1 md:px-16 flex flex-col justify-center">
        <img class="" src={About} alt="People drinking coffee" />
    </div>
    <div class="flex flex-col justify-center md:px-16">
        <h1 class="py-2 pb-4 tracking-widest text-left md:text-left text-textcol text-3xl font-normal">ABOUT US</h1>
        <p class="text-md text-gray-800 text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nisi quam, finibus quis tortor pulvinar, malesuada feugiat eros. Integer malesuada diam ut libero fermentum, id tristique nunc luctus. Vestibulum nisi lectus, aliquam dapibus sem eu, laoreet laoreet turpis. Cras scelerisque vestibulum auctor. Maecenas interdum purus dui, non dignissim neque varius eu. Phasellus viverra sed enim non dignissim. Cras lobortis ullamcorper metus vel posuere. Etiam vel nulla ac purus venenatis finibus.</p>
        <div class="py-8 text-center md:text-left">
            <button class="py-2 px-8 text-white border border-background bg-primary rounded-md font-semibold text-xl hover:bg-accent transition-all duration-100">Lokacije</button>
        </div>
    </div>
</div>

<h1 class="md:hidden text-center py-8 border border-gray-200 shadow-md text-2xl font-normal md:text-textcol tracking-widest bg-gray-100">NOVO U PONUDI</h1>
<div class="bg-[url('/matcha.jpg')] z-10 block md:before:bg-none md:before:opacity-100 relative overflow-hidden bg-cover bg-no-repeat bg-center md:bg-none before:content-['']
            before:absolute
            before:inset-0
            before:block
            before:bg-gradient-to-r
            before:from-accent
            before:to-textcol
            before:opacity-85
            before:z-[-5]">
    <div class="flex md:pr-20">
        <div class="p-4 px-6 md:p-16 text-white text-center md:text-left md:flex md:flex-col md:justify-center">
            <h1 class="hidden md:block text-3xl font-normal py md:text-textcol tracking-widest">NOVO U PONUDI</h1>
            <p class="pt-10 md:py-2 text-2xl font-extrabold md:text-primary">MATCHA</p>
            <p class="pb-10 py-2 text-xl md:text-gray-800">Matcha; je fino mljeveni prah posebno uzgojenog i obrađenog lišća zelenog čaja koji potječe iz Kine. Kasnije je zelena boja prikazana u većini modernih matcha razvijena u Japanu, gdje se danas većina matcha proizvodi. Najkasnije u 12. stoljeću kineski komprimirani čaj, sirovina za matchu, uveden je u Japan.</p>
        </div>
        <div class="mt-28">
            <img class="hidden md:block min-w-[400px] max-h-[700px] rounded-md shadow border border-gray-200" src={Matcha} alt="Matcha tea" />
        </div>
    </div>
</div>
<h1 class="text-3xl text-accent font-semibold text-center md:text-left px-16 pt-12">Naše najpopularnije kave</h1>
<div class="grid grid-cols-1 gap-4 md:gap-8 md:grid-cols-3 px-4 py-8 pb-16 md:px-16 place-items-center">
    <div class="w-full bg-white border border-gray-200 rounded-lg shadow">
        <a class="flex justify-center" href="/">
            <img class="rounded-t-lg max-h-64 md:max-h-72 py-8" src={CoffeeBag} alt="" />
        </a>
        <div class="p-5">
            <a href="/">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-accent">COLUMBIA</h5>
            </a>
            <p class="mb-3 font-normal text-gray-800">Among the favorites of our production, this coffee stands out for its freshness, its excellent aromatic acidity and rich and full body</p>
            <a href="/" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-accent rounded-md hover:bg-textcol focus:outline-none">
                Read more
                 <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </a>
        </div>
    </div>
    <div class="w-full bg-white border border-gray-200 rounded-lg shadow">
        <a class="flex justify-center" href="/">
            <img class="rounded-t-lg max-h-64 md:max-h-72 pt-8" src={CoffeeBag} alt="" />
        </a>
        <div class="p-5">
            <a href="/">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-accent">BRAZIL</h5>
            </a>
            <p class="mb-3 font-normal text-gray-800">Among the favorites of our production, this coffee stands out for its freshness, its excellent aromatic acidity and rich and full body</p>
            <a href="/" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-accent rounded-md hover:bg-textcol ">
                Read more
                 <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </a>
        </div>
    </div>
    <div class="w-full bg-white border border-gray-200 rounded-lg shadow">
        <a class="flex justify-center" href="/">
            <img class="rounded-t-lg  max-h-64 md:max-h-72 pt-8" src={CoffeeBag} alt="" />
        </a>
        <div class="p-5">
            <a href="/">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-accent">ETHIOPIA</h5>
            </a>
            <p class="mb-3 font-normal text-gray-800">Among the favorites of our production, this coffee stands out for its freshness, its excellent aromatic acidity and rich and full body</p>
            <a href="/" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-accent rounded-md hover:bg-textcol ">
                Read more
                 <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </a>
        </div>
    </div>
</div>

<div class="px-16 pt-10 pb-8 md:pb-12 bg-accent text-center md:text-left">
    <h1 class="text-3xl font-thin text-background py-2">PRONAĐITE NAS</h1>
    <div class="grid grid-cols-1 md:grid-cols-3">
        <div class="py-4">
            <h2 class="text-xl text-white font-semibold">Zagreb</h2>
            <p class="text-background">Adresa: Metalceva ul.1 1000, Zagreb, Hrvatska</p>
            <p class="text-background">Radno vrijeme: Ponedjeljak-Cetvrtak: 08-18</p>
            <p class="text-background">Telefon: 099/1111111</p>
        </div>

        <div class="py-4">
            <h2 class="text-xl text-white font-semibold">Rovinj</h2>
            <p class="text-background">Adresa:  Ulica Ricarda Daveggia 7, 52210, Rovinj, Hrvatska</p>
            <p class="text-background">Radno vrijeme: Ponedjeljak-Cetvrtak: 08-18</p>
            <p class="text-background">Telefon: 099/1111111</p>
        </div>
        <div class="py-4">
            <h2 class="text-xl text-white font-semibold">Drustvene mreze</h2>
            <div class="flex flex-row justify-center md:justify-normal">
                <div class="max-w-8 w-full py-2 px">
                    <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M7.46471 1.0662C8.63794 1.01266 9.01258 1 12 1C14.9874 1 15.362 1.01266 16.5352 1.0662C17.7061 1.1196 18.5057 1.30556 19.2054 1.57751C19.9288 1.85858 20.5422 2.2347 21.1537 2.84623C21.7653 3.45779 22.1414 4.07123 22.4225 4.79454C22.6944 5.49426 22.8804 6.29385 22.9338 7.46471C22.9873 8.63798 23 9.01258 23 12C23 14.9874 22.9873 15.362 22.9338 16.5353C22.8804 17.7061 22.6944 18.5057 22.4225 19.2054C22.1414 19.9288 21.7653 20.5422 21.1537 21.1537C20.5422 21.7653 19.9288 22.1414 19.2054 22.4225C18.5057 22.6944 17.7061 22.8804 16.5352 22.9338C15.362 22.9873 14.9874 23 12 23C9.01258 23 8.63794 22.9873 7.46471 22.9338C6.29385 22.8804 5.49426 22.6944 4.79454 22.4225C4.07123 22.1414 3.45775 21.7653 2.84623 21.1537C2.23466 20.5422 1.85858 19.9287 1.57746 19.2054C1.30552 18.5057 1.1196 17.7061 1.06615 16.5353C1.01262 15.362 1 14.9874 1 12C1 9.01254 1.01262 8.63798 1.06615 7.46471C1.1196 6.29385 1.30552 5.49426 1.57746 4.79454C1.85858 4.07123 2.23466 3.45779 2.84623 2.84623C3.45775 2.2347 4.07123 1.85858 4.79454 1.57751C5.49426 1.30556 6.29385 1.1196 7.46471 1.0662ZM16.4449 3.04608C15.285 2.99316 14.9371 2.98198 12 2.98198C9.06284 2.98198 8.71496 2.99316 7.55501 3.04608C6.48257 3.09503 5.90008 3.27423 5.51247 3.42487C4.99906 3.62442 4.63259 3.86278 4.24768 4.24773C3.86278 4.63263 3.62437 4.99906 3.42482 5.51252C3.27423 5.90013 3.09503 6.48257 3.04608 7.55506C2.99316 8.71496 2.98198 9.06288 2.98198 12C2.98198 14.9371 2.99316 15.285 3.04608 16.4449C3.09503 17.5174 3.27423 18.0999 3.42482 18.4875C3.62437 19.0009 3.86278 19.3674 4.24768 19.7523C4.63259 20.1372 4.99906 20.3756 5.51247 20.5751C5.90008 20.7257 6.48257 20.905 7.55506 20.9539C8.71479 21.0068 9.06262 21.018 12 21.018C14.9373 21.018 15.2852 21.0068 16.4449 20.9539C17.5174 20.905 18.0998 20.7257 18.4874 20.5751C19.0009 20.3756 19.3674 20.1372 19.7523 19.7523C20.1372 19.3674 20.3755 19.0009 20.5751 18.4875C20.7257 18.0999 20.9049 17.5174 20.9539 16.4449C21.0068 15.285 21.018 14.9371 21.018 12C21.018 9.06288 21.0068 8.71496 20.9539 7.55506C20.9049 6.48257 20.7257 5.90013 20.5751 5.51252C20.3755 4.99906 20.1372 4.63263 19.7523 4.24768C19.3674 3.86278 19.0009 3.62442 18.4874 3.42487C18.0998 3.27423 17.5174 3.09503 16.4449 3.04608ZM8.33329 12C8.33329 14.025 9.97495 15.6667 12 15.6667C14.025 15.6667 15.6667 14.025 15.6667 12C15.6667 9.97495 14.025 8.33333 12 8.33333C9.97495 8.33333 8.33329 9.97495 8.33329 12ZM6.35131 12C6.35131 8.88032 8.88032 6.35136 12 6.35136C15.1196 6.35136 17.6486 8.88032 17.6486 12C17.6486 15.1197 15.1196 17.6486 12 17.6486C8.88032 17.6486 6.35131 15.1197 6.35131 12ZM17.8718 7.44816C18.6008 7.44816 19.1918 6.8572 19.1918 6.12818C19.1918 5.39915 18.6008 4.8082 17.8718 4.8082C17.1428 4.8082 16.5518 5.39915 16.5518 6.12818C16.5518 6.8572 17.1428 7.44816 17.8718 7.44816Z" fill="#ece0d1"></path> <mask id="mask0_2844_2717" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="1" y="1" width="22" height="22"> <path fill-rule="evenodd" clip-rule="evenodd" d="M7.46471 1.0662C8.63794 1.01266 9.01258 1 12 1C14.9874 1 15.362 1.01266 16.5352 1.0662C17.7061 1.1196 18.5057 1.30556 19.2054 1.57751C19.9288 1.85858 20.5422 2.2347 21.1537 2.84623C21.7653 3.45779 22.1414 4.07123 22.4225 4.79454C22.6944 5.49426 22.8804 6.29385 22.9338 7.46471C22.9873 8.63798 23 9.01258 23 12C23 14.9874 22.9873 15.362 22.9338 16.5353C22.8804 17.7061 22.6944 18.5057 22.4225 19.2054C22.1414 19.9288 21.7653 20.5422 21.1537 21.1537C20.5422 21.7653 19.9288 22.1414 19.2054 22.4225C18.5057 22.6944 17.7061 22.8804 16.5352 22.9338C15.362 22.9873 14.9874 23 12 23C9.01258 23 8.63794 22.9873 7.46471 22.9338C6.29385 22.8804 5.49426 22.6944 4.79454 22.4225C4.07123 22.1414 3.45775 21.7653 2.84623 21.1537C2.23466 20.5422 1.85858 19.9287 1.57746 19.2054C1.30552 18.5057 1.1196 17.7061 1.06615 16.5353C1.01262 15.362 1 14.9874 1 12C1 9.01254 1.01262 8.63798 1.06615 7.46471C1.1196 6.29385 1.30552 5.49426 1.57746 4.79454C1.85858 4.07123 2.23466 3.45779 2.84623 2.84623C3.45775 2.2347 4.07123 1.85858 4.79454 1.57751C5.49426 1.30556 6.29385 1.1196 7.46471 1.0662ZM16.4449 3.04608C15.285 2.99316 14.9371 2.98198 12 2.98198C9.06284 2.98198 8.71496 2.99316 7.55501 3.04608C6.48257 3.09503 5.90008 3.27423 5.51247 3.42487C4.99906 3.62442 4.63259 3.86278 4.24768 4.24773C3.86278 4.63263 3.62437 4.99906 3.42482 5.51252C3.27423 5.90013 3.09503 6.48257 3.04608 7.55506C2.99316 8.71496 2.98198 9.06288 2.98198 12C2.98198 14.9371 2.99316 15.285 3.04608 16.4449C3.09503 17.5174 3.27423 18.0999 3.42482 18.4875C3.62437 19.0009 3.86278 19.3674 4.24768 19.7523C4.63259 20.1372 4.99906 20.3756 5.51247 20.5751C5.90008 20.7257 6.48257 20.905 7.55506 20.9539C8.71479 21.0068 9.06262 21.018 12 21.018C14.9373 21.018 15.2852 21.0068 16.4449 20.9539C17.5174 20.905 18.0998 20.7257 18.4874 20.5751C19.0009 20.3756 19.3674 20.1372 19.7523 19.7523C20.1372 19.3674 20.3755 19.0009 20.5751 18.4875C20.7257 18.0999 20.9049 17.5174 20.9539 16.4449C21.0068 15.285 21.018 14.9371 21.018 12C21.018 9.06288 21.0068 8.71496 20.9539 7.55506C20.9049 6.48257 20.7257 5.90013 20.5751 5.51252C20.3755 4.99906 20.1372 4.63263 19.7523 4.24768C19.3674 3.86278 19.0009 3.62442 18.4874 3.42487C18.0998 3.27423 17.5174 3.09503 16.4449 3.04608ZM8.33329 12C8.33329 14.025 9.97495 15.6667 12 15.6667C14.025 15.6667 15.6667 14.025 15.6667 12C15.6667 9.97495 14.025 8.33333 12 8.33333C9.97495 8.33333 8.33329 9.97495 8.33329 12ZM6.35131 12C6.35131 8.88032 8.88032 6.35136 12 6.35136C15.1196 6.35136 17.6486 8.88032 17.6486 12C17.6486 15.1197 15.1196 17.6486 12 17.6486C8.88032 17.6486 6.35131 15.1197 6.35131 12ZM17.8718 7.44816C18.6008 7.44816 19.1918 6.8572 19.1918 6.12818C19.1918 5.39915 18.6008 4.8082 17.8718 4.8082C17.1428 4.8082 16.5518 5.39915 16.5518 6.12818C16.5518 6.8572 17.1428 7.44816 17.8718 7.44816Z" fill="white"></path> </mask> <g mask="url(#mask0_2844_2717)"> </g> </g></svg>
                </div>
                <div class="max-w-8 w-full py-2">
                    <svg viewBox="-5 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>facebook [#ffffff]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-385.000000, -7399.000000)" fill="#ece0d1"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M335.821282,7259 L335.821282,7250 L338.553693,7250 L339,7246 L335.821282,7246 L335.821282,7244.052 C335.821282,7243.022 335.847593,7242 337.286884,7242 L338.744689,7242 L338.744689,7239.14 C338.744689,7239.097 337.492497,7239 336.225687,7239 C333.580004,7239 331.923407,7240.657 331.923407,7243.7 L331.923407,7246 L329,7246 L329,7250 L331.923407,7250 L331.923407,7259 L335.821282,7259 Z" id="facebook-[#ffffff]"> </path> </g> </g> </g> </g></svg>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="bg-textcol px-16 py-2">
    <p class="text-xs text-white text-center md:text-left">© Sva prava pridrzana, kreirao <a href="https://github.com/valentin994" target="_blank">Valentin Vareskic</a></p>
</div>
