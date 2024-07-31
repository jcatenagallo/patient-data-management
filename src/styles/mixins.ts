import tw, { css } from 'twin.macro';

export const WrapperLayoutMixin = css`
  ${tw`
    desktopXl:max-w-screen-desktopXl
    desktopXl:mx-auto
  `}
`;

export const LayoutMixin = css`
  ${tw`
    tracking-wide
    w-full
    mx-auto
    px-4
    tablet:px-10
    desktop:px-28
    desktop:max-w-screen-desktop
    desktopXl:max-w-screen-desktopXl
   `}
`;

export const SwiperEqualSlideHeight = css`
  > .swiper-wrapper > .swiper-slide {
    ${tw`
      h-auto
    `}

    > div {
      ${tw`
          h-full
        `}
    }
  }
`;

export const SwiperScrollBar = css`
  > .swiper-scrollbar {
    ${tw`
      bg-blues-foam
      relative
      bottom-0
      left-auto
      w-auto
      mt-7
      mx-7
      desktop:mt-20
      desktop:mx-80
    `}

    > .swiper-scrollbar-drag {
      ${tw`
        cursor-grab
        bg-greens-deepSea
      `}
    }
  }
`;
