<script setup lang="ts">
import useLogin from './useLogin'

const { loginForm, submit } = useLogin({})
</script>

<template>
  <div _flex="~">
    <q-card _w="80vw min-375px max-500px" _m="auto" _p="10px">
      <q-form @submit="submit">
        <q-card-section>
          <div _text="3xl">登录</div>
        </q-card-section>

        <q-card-section _space="y-10px">
          <q-input
            v-model="loginForm.account"
            label="账号"
            lazy-rules
            filled
            :rules="[
              v => v.length || '请输入您的账号',
              v => v.length > 6 || '请输入至少6个字符'
            ]"
          />

          <q-input
            v-model="loginForm.password"
            label="密码"
            lazy-rules
            filled
            :rules="[
              v => v.length || '请输入您的密码',
              v => v.length > 6 || '请输入至少6个字符'
            ]"
          />
        </q-card-section>

        <q-card-section>
          <q-btn type="submit" size="lg" push _w="full">登录</q-btn>
        </q-card-section>
      </q-form>
    </q-card>
  </div>
</template>

