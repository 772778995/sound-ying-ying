<script setup lang="ts">
import useLogin from './useLogin'

const { loginForm, submitHandler } = useLogin({})
</script>

<template>
  <div _flex="~">
    <q-form _m="auto" _w="max-500px min-350px" _space="y-20px" @submit="submitHandler">
      <q-input
        v-model="loginForm.account"
        :label="$t('account')"
        outlined
        lazy-rules
        maxlength="20"
        :rules="[
          v => v.length || $t('Please enter your account'),
          v => v.length > 6 || $t('Please enter at least 6 characters')
        ]"
      />
      <div>
        <q-btn label="Submit" type="submit" />
        <q-btn label="Reset" type="reset" flat />
      </div>
    </q-form>
    <!-- <q-card _w="80vw min-375px max-500px" _m="auto" _p="10px">
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
    </q-card> -->
  </div>
</template>

