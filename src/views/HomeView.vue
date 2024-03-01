<template>
    <!-- <FrontAds /> -->
    <main class="main">
        <top-banner-vue></top-banner-vue>
        <featured-section-vue></featured-section-vue>
        <featured-category-vue></featured-category-vue>
        <daily-best-sell-vue></daily-best-sell-vue>
        <three-banner-vue></three-banner-vue>
        <popular-product-vue></popular-product-vue>
        <top-brand></top-brand>
        <deals-of-day-vue></deals-of-day-vue>
        <product-list-four-vue></product-list-four-vue>
    </main>
</template>

<script>
// import FrontAds from '@/components/FrontAds.vue';
import TopBannerVue from '@/components/TopBanner.vue'
import FeaturedCategoryVue from '@/components/FeaturedCategory.vue'
import FeaturedSectionVue from '@/components/FeaturedSection.vue'
import ThreeBannerVue from '@/components/ThreeBanner.vue';
import PopularProductVue from '@/components/PopularProduct.vue';
import DealsOfDayVue from '@/components/DealsOfDay.vue';
import ProductListFourVue from '@/components/ProductListFour.vue';
import TopBrand from '@/components/TopBrand.vue';
import DailyBestSellVue from '@/components/DailyBestSell.vue';
export default {
    name: 'HomeView',
    components: {
        TopBannerVue,
        FeaturedCategoryVue, FeaturedSectionVue,
        ThreeBannerVue, PopularProductVue,
        DealsOfDayVue, ProductListFourVue,
        TopBrand, DailyBestSellVue,
    },
}
</script>

<style>

</style>
