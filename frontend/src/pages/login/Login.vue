<script setup lang="ts">
import { isMobilePhone, isEmail } from 'class-validator'
import useLogin from './useLogin'

const { loginForm, isLoginLoading, loginHandler } = useLogin()
</script>

<template>
  <div _flex="~">
    <q-form _m="auto" _w="80vw max-350px" _space="y-10px" @submit="loginHandler">
      <!-- 手机登录 -->
      <template v-if="false">
        <q-input
          v-model="loginForm.phone"
          :label="$t('phone')"
          maxlength="11"
          outlined
          lazy-rules
          :rules="[v => isMobilePhone(v, 'zh-CN') || $t('Please enter your phone')]"
        />
        <div _flex="~">
          <div _flex="1">
            <q-input
              v-model="loginForm.smsCode"
              :label="$t('SMS code')"
              outlined
              maxlength="6"
              lazy-rules
              :rules="[
                v => /\d{6}/.test(v) || $t('Please enter a 6-digit verification code')
              ]"
            />
          </div>

          <q-btn _w="140px" _m="l-20px" _h="56px" color="primary" icon="email" loading>
            {{ $t('Send SMS') }}
            <template v-slot:loading>
              <q-spinner-hourglass class="on-left" />
              请稍后…
            </template>
          </q-btn>
        </div>
        <q-input
          v-model="loginForm.psd"
          :label="$t('psd')"
          maxlength="20"
          outlined
          lazy-rules
          type="password"
          :rules="[
            v => v.length >= 6 || $t('Please enter a password of at least 6 characters')
          ]"
        />
      </template>

      <template v-if="true">
        <q-input
          v-model="loginForm.email"
          :label="$t('email')"
          maxlength="255"
          outlined
          lazy-rules
          :rules="[v => isEmail(v) || $t('Please enter your email')]"
        />
        <div _flex="~">
          <div _flex="1">
            <q-input
              v-model="loginForm.emailCode"
              :label="$t('SMS code')"
              outlined
              maxlength="6"
              lazy-rules
              :rules="[
                v => /\d{6}/.test(v) || $t('Please enter a 6-digit verification code')
              ]"
            />
          </div>

          <q-btn
            _w="170px"
            _m="l-20px"
            _h="56px"
            color="primary"
            icon="email"
            :loading="false"
          >
            {{ $t('Send Email Code') }}
            <template v-slot:loading>
              <q-spinner-hourglass class="on-left" />
              请稍后…
            </template>
          </q-btn>
        </div>

        <q-input
          v-if="false"
          v-model="loginForm.psd"
          :label="$t('psd')"
          maxlength="20"
          outlined
          lazy-rules
          type="password"
          :rules="[
            v => v.length >= 6 || $t('Please enter a password of at least 6 characters')
          ]"
        />
      </template>

      <q-btn
        :loading="isLoginLoading"
        :label="$t('login')"
        icon="person"
        color="primary"
        _m="!t-20px"
        _w="full"
        _h="54px"
        type="submit"
      />
    </q-form>
  </div>
</template>

