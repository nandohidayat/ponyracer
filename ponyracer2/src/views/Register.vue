<template>
    <div class="mx-auto text-center mb-3 fs-3">Log in</div>
    <form class="border bg-light rounded py-3 w-75 mx-auto">
      <div class="form-group mb-3 mx-auto w-50">
        <label for="login" class="form-label">Login</label>
        <input @change="setDirty('login')" class="form-control" id="login" type="text" v-model.trim="userModel.login" />
        <div class="invalid-feedback d-block" v-if="errors.login && dirty.login">The login is required</div>
      </div>
      <div class="form-group mb-3 mx-auto w-50">
        <label for="password" class="form-label">Password</label>
        <input @change="setDirty('password')" class="form-control" id="password" type="password" v-model="userModel.password" />
        <div class="invalid-feedback d-block" v-if="errors.password && dirty.password">The password is required</div>
      </div>
      <div class="form-group mb-3 mx-auto w-50">
        <label for="birthYear" class="form-label">Birth year</label>
        <input @change="setDirty('birthYear')" class="form-control" id="birthYear" type="number" v-model.number="userModel.birthYear" />
        <div class="invalid-feedback d-block" v-if="errors.birthYear && dirty.birthYear">The birth year is required</div>
      </div>
      <div class="form-group mb-3 mx-auto text-center">
        <button :class="{'disabled':isButtonDisabled}" @click="register()" type="submit" class="btn btn-primary" >Submit</button>
      </div>
    </form>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, computed } from 'vue';
import UserModel from '@/models/UserModel.ts';

export default defineComponent({
  name: 'Register',
  setup() {
    const userModel = reactive<UserModel>({login:null,password:null,birthYear:1996});

    const setDirty = (name) => {
      dirty[name] = true;
    }

    const errors = computed(() => {
      const errors: Partial<Record<keyof UserModel, boolean>> = {};
      if (!userModel.login) {
        errors.login = true;
      }
      if (!userModel.password) {
        errors.password = true;
      }
      if (!userModel.birthYear) {
        errors.birthYear = true;
      }
      return errors;
    });

    const dirty = reactive<{ [K in keyof UserModel]: boolean }>({
      login: false,
      password: false,
      birthYear: false
    });

    const isButtonDisabled = computed(() => {return errors.login && errors.password && errors.birthYear });

    return{userModel, errors,dirty,setDirty,isButtonDisabled}
  }
})
</script>
