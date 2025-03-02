<template>
  <section class="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
    <div
      class="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20"
    />
    <div
      class="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"
    />
    <div class="mx-auto max-w-2xl lg:max-w-4xl">
      <img
        class="mx-auto h-12"
        src="https://tailwindui.com/plus-assets/img/logos/workcation-logo-indigo-600.svg"
        alt=""
      />
      <p
        class="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-5xl font-extrabold text-transparent text-center"
      >
        Hello world
      </p>
      <figure class="mt-10">
        <blockquote
          class="text-center text-xl/8 font-semibold text-gray-900 sm:text-2xl/9"
        >
          <p>
            “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita
            voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum
            et corporis.”
          </p>
        </blockquote>
        <figcaption class="mt-10">
          <img
            class="mx-auto size-10 rounded-full"
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
          <div class="mt-4 flex items-center justify-center space-x-3 text-base">
            <div class="font-semibold text-gray-900">Judith Black</div>
            <svg
              viewBox="0 0 2 2"
              width="3"
              height="3"
              aria-hidden="true"
              class="fill-gray-900"
            >
              <circle cx="1" cy="1" r="1" />
            </svg>
            <div class="text-gray-600">CEO of Workcation</div>
          </div>
        </figcaption>
      </figure>
    </div>

    <div class="m-8">
      <div class="diff aspect-[16/9]">
        <div class="diff-item-1">
          <div
            class="bg-primary text-primary-content grid place-content-center text-9xl font-black"
          >
            DAISY
          </div>
        </div>
        <div class="diff-item-2">
          <div class="bg-base-200 grid place-content-center text-9xl font-black">
            DAISY
          </div>
        </div>
        <div class="diff-resizer"></div>
      </div>
    </div>

    <article class="prose prose-slate prose-lg">
      <h1>Garlic bread with cheese: What the science tells us</h1>
      <p>
        For years parents have espoused the health benefits of eating garlic bread with
        cheese to their children, with the food earning such an iconic status in our
        culture that kids will often dress up as warm, cheesy loaf for Halloween.
      </p>
      <p>
        But a recent study shows that the celebrated appetizer may be linked to a series
        of rabies cases springing up around the country.
      </p>
      <!-- ... -->
    </article>
  </section>
</template>
