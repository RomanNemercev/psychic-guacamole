<template>
  <section class="bg-porcelain">
    <div class="w-full mx-auto px-[50px] max-w-desktop pt-100px pb-[95px]">
      <h2 class="text-45px font-extrabold tracking-min mb-[53px]">
        Готовый набор для ваших задач
      </h2>
      <div class="grid grid-cols-3 gap-x-5 mb-50px">
        <article class="border border-athens-gray rounded-fifteen">
          <div class="bg-white rounded-t-fifteen p-35px">
            <h3 class="text-30px font-semibold tracking-minus mb-2">
              Pro/Start
            </h3>
            <span class="text-lg tracking-minus">Малый</span>
            <p class="text-25px font-semibold mt-3.5 mb-[39px]">
              от 50.000<span class="text-lg">₽</span>
            </p>
            <MyButton :customClass="'w-full text-lg py-[11px]'"
              >Выбрать</MyButton
            >
          </div>
          <div class="h-px bg-athens-gray w-full"></div>
          <div>
            <TabsStart />
          </div>
        </article>
        <article class="border border-athens-gray rounded-fifteen">
          <div class="bg-white rounded-t-fifteen p-35px">
            <h3 class="text-30px font-semibold tracking-minus mb-2">
              Pro/Grow
            </h3>
            <span class="text-lg tracking-minus">Средний</span>
            <p class="text-25px font-semibold mt-3.5 mb-[39px]">
              от 100.000<span class="text-lg">₽</span>
            </p>
            <MyButton :customClass="'w-full text-lg py-[11px]'"
              >Выбрать</MyButton
            >
          </div>
          <div class="h-px bg-athens-gray w-full"></div>
          <div>
            <TabsGrow />
          </div>
        </article>
        <article class="border border-athens-gray rounded-fifteen">
          <div class="bg-white rounded-t-fifteen p-35px">
            <h3 class="text-30px font-semibold tracking-minus mb-2">
              Pro/Scale
            </h3>
            <span class="text-lg tracking-minus">Расширенный</span>
            <p class="text-25px font-semibold mt-3.5 mb-[39px]">
              от 300.000<span class="text-lg">₽</span>
            </p>
            <MyButton :customClass="'w-full text-lg py-[11px]'"
              >Выбрать</MyButton
            >
          </div>
          <div class="h-px bg-athens-gray w-full"></div>
          <div><TabsScale /></div>
        </article>
      </div>
      <div
        class="bg-white border-athens-gray rounded-fifteen p-35px relative overflow-hidden"
      >
        <div class="max-w-[435px]">
          <h3 class="text-30px font-semibold tracking-minus mb-[17px]">
            Pro/Personal
          </h3>
          <p
            class="text-base font-normal text-slate-custom leading-norm mb-[51px]"
          >
            Соберем для вас индивидуальное решение под ваши идеи и&nbsp;задачи.
            Составим дорожную карту, расскажем о&nbsp;сроках и&nbsp;стоимости
          </p>
          <div class="flex gap-x-15px">
            <PhoneInput class="w-full" :required="true" />
            <MyButton
              class="text-lg font-bold"
              :fontWeight="'700'"
              :customClass="'px-[19.29px]'"
              >Отправить</MyButton
            >
          </div>
        </div>
        <div class="gear-3"></div>
        <div class="gear-2"></div>
        <div class="gear-1"></div>
      </div>
    </div>
  </section>
</template>

<script setup>
import MyButton from "~/components/ui/MyButton.vue";
import PhoneInput from "~/components/ui/PhoneInput.vue";

import TabsStart from "~/components/tabs/start/TabsStart.vue";
import TabsGrow from "~/components/tabs/grow/TabsGrow.vue";
import TabsScale from "~/components/tabs/scale/TabsScale.vue";
</script>

<style scoped>
.gear-1 {
  position: absolute;
  bottom: -15px;
  right: -105px;
  background-image: url("../assets/img/gear-1.png");
  width: 539.06px;
  height: 539.06px;
  background-repeat: no-repeat;
  background-position: center;
  animation: rotate 100s linear infinite;
}

.gear-2 {
  position: absolute;
  bottom: -60px;
  right: 351px;
  background-image: url("../assets/img/gear-2.png");
  width: 147.17px;
  height: 147.17px;
  background-repeat: no-repeat;
  background-position: center;
  animation: rotate-reverse 50s linear infinite;
}

.gear-3 {
  position: absolute;
  bottom: 159px;
  right: 494px;
  background-image: url("../assets/img/gear-3.png");
  width: 66.84px;
  height: 66.84px;
  background-repeat: no-repeat;
  background-position: center;
  animation: rotate 70s linear infinite;
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes rotate-reverse {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-360deg);
  }
}
</style>
