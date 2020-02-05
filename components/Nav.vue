<template>
  <b-navbar class="nav__menu">
    <b-navbar-brand href="/" class="nav__logo">
      <b-img src="/images/header-logo.svg"></b-img>
      <h4
        class="col-12 color-violent-violet text-bolder text-center mt-3 nav__logo--heading"
      ></h4>
      <p class="col-12 color-violent-violet text-center nav__logo--text">
        WHERE WE TALK ADONIS JS
      </p>
    </b-navbar-brand>
    <div class="mobile-navigation">
      <b-form-checkbox
        id="toggle-nav"
        class="mobile-navigation__checkbox"
      ></b-form-checkbox>
      <label for="toggle-nav" class="mobile-navigation__button">
        <span class="mobile-navigation__icon"></span>
      </label>
      <div class="mobile-navigation__background"></div>
      <div class="mobile-navigation__nav" role="navigation">
        <div class="mobile-navigation__form-container bg-white">
          <b-form class="mobile-navigation__form">
            <b-form-input
              class="form-control mobile-navigation__search bg-transparent border-0 mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            ></b-form-input>
            <b-button
              class="bg-transparent color-grey-dark my-2 my-sm-0"
              type="submit"
            >
              <!-- <ion-icon name="search"></ion-icon> -->
            </b-button>
          </b-form>
        </div>
        <ul class="mobile-navigation__main">
          <li class="mobile-navigation__item">
            <nuxt-link to="blogs" class="mobile-navigation__link"
              >Blog</nuxt-link
            >
          </li>
          <li class="mobile-navigation__item">
            <nuxt-link to="blogs" class="mobile-navigation__link"
              >Tutorials</nuxt-link
            >
          </li>
          <li class="mobile-navigation__item">
            <nuxt-link to="blogs" class="mobile-navigation__link"
              >Backend</nuxt-link
            >
          </li>
        </ul>

        <ul class="mobile-navigation-socials">
          <li class="mobile-navigation-socials__list">
            <a href="#" class="mobile-navigation-socials__link bg-twitter">
              <!-- <ion-icon name="logo-twitter"></ion-icon> -->
            </a>
          </li>
          <li class="mobile-navigation-socials__list">
            <a href="#" class="mobile-navigation-socials__link bg-facebook">
              <!-- <ion-icon name="logo-facebook"></ion-icon> -->
            </a>
          </li>
          <li class="mobile-navigation-socials__list">
            <a href="#" class="mobile-navigation-socials__link bg-linkedin">
              <!-- <ion-icon name="logo-linkedin"></ion-icon> -->
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="nav__menu-content"></div>
    <ul class="socials">
      <li class="socials__list">
        <a href="#" class="socials__link">
          <!-- <ion-icon name="logo-twitter"></ion-icon> -->
        </a>
      </li>
      <li class="socials__list">
        <a href="#" class="socials__link">
          <!-- <ion-icon name="logo-facebook"></ion-icon> -->
        </a>
      </li>
      <li class="socials__list">
        <a href="#" class="socials__link">
          <!-- <ion-icon name="logo-linkedin"></ion-icon> -->
        </a>
      </li>
    </ul>
    <div class="nav__form-container">
      <b-form action="" class="nav__form">
        <b-form-input
          class="form-control navbar__search bg-transparent border-0 mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        ></b-form-input>
        <b-button
          class="bg-transparent color-grey-dark my-2 my-sm-0"
          type="submit"
        >
          <!-- <ion-icon name="search"></ion-icon> -->
        </b-button>
      </b-form>
    </div>
    <ul class="nav__main">
      <li class="nav__main--list active">
        <nuxt-link to="blogs" class="nav__main--link">
          Blog
        </nuxt-link>
      </li>
      <li class="nav__main--list">
        <nuxt-link to="blogs" class="nav__main--link">
          Tutorials
        </nuxt-link>
      </li>
      <li class="nav__main--list">
        <nuxt-link to="blogs" class="nav__main--link">
          Backend
        </nuxt-link>
      </li>
    </ul>
  </b-navbar>
</template>

<script>
export default {}
</script>

<style></style>
