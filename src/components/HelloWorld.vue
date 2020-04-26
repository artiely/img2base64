<template>
  <q-page class="flex flex-center">
    <q-card
      class="my-card"
      style="width:90%"
    >
      <q-card-section>
        <h6>请用开启跨域的浏览器访问</h6>
        <q-input
          label="请输入图片链接"
          v-model="url"
        ></q-input>
        <q-badge color="secondary">
          设置图片大小
        </q-badge>
        <q-slider
          v-model="standard"
          :min="10"
          :max="50"
        />
        <div
          class="img"
          :style="{width:standard+'px',height:standard+'px'}"
        >
          <img :src="url" />
        </div>

        <div style="word-break: break-word;min-height:40px">{{base64}}</div>
        <div>
        <q-btn
          color="amber"
          glossy
          label="生成base64"
          @click="hanler2base64"
        />
        <q-btn color="deep-orange" v-copy="base64" glossy label="copy" @click="handlerClick"/>
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>
<script>
import domtoimage from 'dom-to-image';
export default {
  name: 'HelloWorld',
  data () {
    return {
      url: '',
      standard: 10,
      base64: ''
    }
  },
  methods: {
    handlerClick(){
      this.url = ''
      setTimeout(()=>{
        this.base64 = ''
      },30)
    },
    hanler2base64 () {
      let vm = this
      let node = document.querySelector('.img')
      this.$nextTick(() => {
        domtoimage.toPng(node)
          .then(function (dataUrl) {
          console.log("dataUrl", dataUrl)
          vm.base64 = dataUrl
            // var img = new Image();
            // img.src = dataUrl;
            // document.body.appendChild(img);
          })
          .catch(function (error) {
            console.error('oops, something went wrong!', error);
          });
      })
    }
  }
}
</script>
<style>
.img {
  display: inline-block;
  position: relative;
}
.img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  font-size: 0;
  position: absolute;
  top: 0;
  left: 0;
}
</style>
