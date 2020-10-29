<template>
  <div id="popup__status">
    <slot />
    <div class="background__popup" />
  </div>
</template>
<script>
export default {
  name: 'PopupStatus',
  conponents: {
  }
}
</script>

<style lang="scss">
#popup__status {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  &.pop__success {
    .popup__content {
      background: #B1DFFF;
      &--text {
        color: #00416D;
      }
      &--btn {
        background: #00416D;
      }
    }
  }
  &.pop__error {
    .popup__content {
        background: #FFECEC;
      &--text {
        color: #FF5454;
      }
      &--btn {
        background:#FF5454;
      }
    }
  }
  &.full__error {
    .popup__content {
      background-color: #FF5454;
      height: auto;
      width: 100%;
      left: 0;
      border-radius: 0;
      &--text {
        color: #fff;
        margin: 0;
        height: 73px;
        line-height: 73px;
        width: 100%;
      }
      .btn-close {
        position: absolute;
        right: 28px;
        top: 0px;
        background: no-repeat;
        border: none;
        font-size: 2rem;
        color: #fff;
        cursor: pointer;
      }
    }
  }
 .popup__content {
    @media only screen and (max-width: 768px) {
      width: 100vw;
      left: 0;
      border-radius: 0;
      height: 186px;
    }
    width: calc(100% - 80px);
    height: 450px;
    border-radius: 10px;
    position: absolute;
    z-index: 3;
    top: 50%;
    transform: translateY(-60%);
    left: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &--text {
      text-align: center;
      font-size: 30px;
      margin-bottom: 40px;
      font-weight: 600;
    @media only screen and (max-width: 768px) {
      font-size: 12px;
      margin-bottom: 10px;
    }
    }
    &--btn {
    @media only screen and (max-width: 768px) {
      font-size: 18px;
    }
      border-radius: 10px;
      font-size: 24px;
      outline: none;
      width: 3;
      padding: 20px 120px;
      color: #fff;
      border: none;
      &:hover {
        opacity: 0.9;
      }
    }
 }
 .background__popup {
    background: #051621;
    opacity: 0.9;
    width: 100%;
    height: 100%;
    top: 0;
    position: absolute;
    z-index: 2;
 }
}
</style>
