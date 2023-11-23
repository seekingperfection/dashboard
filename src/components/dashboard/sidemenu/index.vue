<template>
  <div class="sidemenu">
    <div class="sidemenu-logo-block">
      <img src="@/assets/icons/logo.svg" alt="logo" class="h-[36px] w-[71px] cursor-pointer" @click="handleLogoClick" />
    </div>
    <div class="sidemenu-links">
      <router-link
        v-for="(item, index) in Menu"
        :key="index"
        class="sidemenu-link"
        :to="item.to"
        :exact="true"
        active-class="sidemenu-link--active"
      >
        <img :src="getImageUrl(item.svg)" :alt="item.svg" />
        <img :src="getImageUrl(item.svg, 'active')" :alt="item.svg" class="active-image" />
        <span>{{ item.title }}</span>
      </router-link>
    </div>
    <div class="sidemenu-help">
      <img src="@/assets/icons/questionMark.svg" alt="question mark" />
      <span class="tracking-wide text-gray-400"> Help </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

interface MenuItem {
  svg: string
  title: string
  to: string
}

const Menu: MenuItem[] = [
  {
    svg: 'dashboard',
    title: 'Dashboard',
    to: '/dashboard',
  },
  {
    svg: 'labTest',
    title: 'Lab test',
    to: '/lab-test',
  },
  {
    svg: 'appointment',
    title: 'Appointment',
    to: '/appointment',
  },
  {
    svg: 'medicineOrder',
    title: 'Medicine order',
    to: '/medicine-order',
  },
  {
    svg: 'message',
    title: 'Message',
    to: '/message',
  },
  {
    svg: 'payment',
    title: 'Payment',
    to: '/payment',
  },
  {
    svg: 'settings',
    title: 'Settings',
    to: '/settings',
  },
]

interface Props {
  opened?: boolean
  onClose: () => void
}

const router = useRouter()

const handleLogoClick = () => {
  router.push('/')
}

const getImageUrl = (svg: string, modifier?: string): string => {
  return new URL(
    `../../../assets/icons/${modifier === undefined ? svg + '.svg' : svg + '--active.svg'}`,
    import.meta.url,
  ).href
}
</script>

<style scoped lang="scss">
.sidemenu {
  @apply fixed left-0 top-0 hidden h-full w-3/4 flex-col bg-white lg:flex lg:w-[230px];

  &-links {
    @apply mb-[90px] flex flex-col gap-y-[25px] overflow-auto;
  }

  &-link {
    @apply relative flex h-[39px] min-h-[39px] cursor-pointer items-center p-0 pl-[38px] normal-case tracking-wide text-gray-400;

    .active-image {
      @apply hidden;
    }

    &:hover {
      @apply text-blue-100;

      img {
        @apply hidden;
      }

      .active-image {
        @apply flex;
      }

      &:before {
        @apply absolute bottom-0 left-0 top-0 w-[3px] bg-blue-100;

        content: '';
      }
    }

    img {
      @apply mr-4 h-[18px] w-[18px] text-blue-100;
    }

    &--active {
      color: #0b63f8 !important;

      img {
        @apply hidden;
      }

      .active-image {
        @apply flex;
      }

      &:before {
        @apply absolute bottom-0 left-0 top-0 w-[3px] bg-blue-100;

        content: '';
      }
    }
  }

  &-logo-block {
    @apply flex px-[20px] pb-[58px] pt-[55px];
  }

  &--visible {
    @apply z-[30] flex;
  }

  &-help {
    @apply fixed bottom-0 left-0 flex w-[230px] gap-x-[18px] pb-[32px] pl-[43px];
  }
}
</style>
