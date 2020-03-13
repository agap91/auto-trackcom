<template>
  <section>
    <home />
    <work />
    <about />
    <whywe />
    <callback />
    <results />
    <comments />
    <contacts />
  </section>
</template>

<script>
import AppLogo from "~/components/AppLogo.vue";
import Home from "~/components/Home.vue";
import Work from "~/components/Work.vue";
import About from "~/components/About.vue";
import Whywe from "~/components/Whywe.vue";
import Callback from "~/components/Callback.vue";
import Results from "~/components/Results.vue";
import Comments from "~/components/Comments.vue";
import Contacts from "~/components/Contacts.vue";

export default {
  head: {
    meta: [
      {
        name: "description",
        content:
          "Автосервис в Королеве. Ремонт коммерческих и легковых автомобилей. Шиномонтаж всех видов автомашин."
      },
      {
        name: "keywords",
        content:
          "2013 - 2020, man, газель, камаз, шиномонтаж, комерческий транспорт, ремонт, автосервис, без рубрики, новости, советы, услуги, диагностика"
      },
      {
        name: "og:title",
        content:
          "Автосервис Auto Trackcom - ремонт легкового и коммерческого транспорта"
      },
      {
        name: "og:description",
        content:
          "Автосервис в Королеве. Ремонт коммерческих и легковых автомобилей. Шиномонтаж всех видов автомашин."
      }
    ]
  },
  components: {
    AppLogo,
    home: Home,
    work: Work,
    about: About,
    whywe: Whywe,
    callback: Callback,
    results: Results,
    comments: Comments,
    contacts: Contacts
  }
};
</script>

<style>
</style>

