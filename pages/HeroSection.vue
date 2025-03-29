<template>
  <section class="w-full mx-auto px-[50px] max-w-desktop pt-36 pb-64">
    <p class="text-xl font-normal text-slate-custom font-proxima mb-[7px]">
      Студия разработки
    </p>
    <h1
      class="text-70px font-extrabold font-proxima leading-[90px] tracking-[0.01em] mb-3"
    >
      Создаем<br />digital решения
    </h1>
    <h3 class="text-22px text-midnight mb-[70px]">
      Для малого, среднего и крупного бизнеса
    </h3>
    <div class="max-w-[420px]">
      <p class="text-xl font-bold mb-5">Обсудим проект?</p>
      <div class="flex gap-x-3.5">
        <PhoneInput class="w-full" :required="true" />
        <MyButton class="min-h-[50px] text-lg font-bold">Выбрать</MyButton>
      </div>
    </div>
    <div class="blob-3"></div>
    <div class="blob-2"></div>
    <div class="blob-1"></div>
  </section>
</template>

<style scoped>
.blob-1 {
  position: absolute;
  right: 28.5vw;
  top: 30.5vh;
  width: 452px;
  height: 451px;
  background-image: url("../assets/img/blob-1.png");
  background-repeat: no-repeat;
  background-position: center;
  animation: blob 100s linear infinite;
}

.blob-2 {
  position: absolute;
  top: 13vh;
  right: 18.2vw;
  width: 269px;
  height: 269px;
  background-image: url("../assets/img/blob-2.png");
  background-repeat: no-repeat;
  background-position: center;
  animation: blob-reverse 100s linear infinite;
}

.blob-3 {
  position: absolute;
  top: 13.5vh;
  right: 34.5vw;
  width: 122px;
  height: 122px;
  background-image: url("../assets/img/blob-3.png");
  background-repeat: no-repeat;
  background-position: center;
  animation: blob 100s linear infinite;
}

@keyframes blob {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes blob-reverse {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-360deg);
  }
}
</style>
