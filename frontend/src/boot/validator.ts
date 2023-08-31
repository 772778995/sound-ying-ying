import { FormItemRule } from 'element-plus'
import i18n from '@/src/i18n'
import { boot } from 'quasar/wrappers'

const t = i18n.global.t

type Trigger = 'blur' | 'change' | 'focus' | 'input' | 'clear'

type ValidatorRule = FormItemRule & {
  trigger?: Trigger | Trigger[]
}

class Validator {
  /** 校验规则 */
  private rules

  /**
   * 生成 Validator 的实例对象
   * @param rule 校验规则
   */
  constructor(rule?: ValidatorRule) {
    this.rules = [] as ValidatorRule[]
    if (rule) this.rules.push(rule)
  }

  /** 函数包装器 */
  private generateFn(inputRule: any, defaultRule: ValidatorRule) {
    inputRule = Object.assign(defaultRule, inputRule)
    this.rules.push(inputRule)
    return this
  }

  /**
   * 检验必填项
   * @param rule 检验规则
   * @returns 该项是必填项
   */
  required(
    rule = {} as Omit<ValidatorRule, 'required' | 'whitespace'>
  ): Omit<this, 'required'> {
    return this.generateFn(rule, {
      required: true,
      whitespace: true,
      message: rule.message || (() => t('this-item-is-required')),
      trigger: 'blur'
    })
  }

  /**
   * 检验邮箱格式
   * @param rule 检验规则
   * @returns 非法的邮箱格式
   */
  email(rule = {} as Omit<ValidatorRule, 'type'>): Omit<this, 'email'> {
    return this.generateFn(rule, {
      type: 'email',
      message: rule.message || (() => t('illegal-email-format')),
      trigger: 'blur'
    })
  }

  /**
   * 检验url格式
   * @param rule 检验规则
   * @returns 非法的URL
   */
  url(rule = {} as Omit<ValidatorRule, 'type'>): Omit<this, 'url'> {
    return this.generateFn(rule, {
      type: 'url',
      message: rule.message || (() => t('illegal-URL')),
      trigger: 'blur'
    })
  }

  /**
   * 检验日期格式
   * @param rule 检验规则
   * @returns 非法的日期
   */
  date(rule = {} as Omit<ValidatorRule, 'type'>): Omit<this, 'date'> {
    return this.generateFn(rule, {
      type: 'date',
      message: rule.message || (() => t('illegal-date')),
      trigger: 'blur'
    })
  }

  /**
   * 校验十六进制格式
   * @param rule 检验规则
   * @returns 非法的十六进制颜色
   */
  hex(rule = {} as Omit<ValidatorRule, 'type'>): Omit<this, 'hex'> {
    return this.generateFn(rule, {
      type: 'hex',
      message: rule.message || (() => t('illegal-hex-color')),
      trigger: 'blur'
    })
  }

  /**
   * 检验至少n个字符
   * @param min 至少n个字符
   * @param rule 检验规则
   * @returns 至少${min}个字符
   */
  min(min: number, rule = {} as Omit<ValidatorRule, 'min'>): Omit<this, 'min'> {
    return this.generateFn(rule, {
      min,
      message: rule.message || (() => `${t('at-least')} ${min} ${t('characters')}`),
      trigger: 'blur'
    })
  }

  /**
   * 校验至多n个字符
   * @param max 至多n个字符
   * @param rule 校验规则
   * @returns 至多${max}个字符
   */
  max(max: number, rule = {} as Omit<ValidatorRule, 'max'>): Omit<this, 'max'> {
    return this.generateFn(rule, {
      max,
      message: rule.message || (() => `${t('at-most')} ${max} ${t('characters')}`),
      trigger: 'blur'
    })
  }

  /**
   * 校验必须n个字符
   * @param len 必须n个字符
   * @param rule 校验规则
   * @returns 必须是${len}个字符
   */
  len(len: number, rule = {} as Omit<ValidatorRule, 'len'>): Omit<this, 'len'> {
    return this.generateFn(rule, {
      len,
      message: rule.message || (() => `${t('must-be')} ${len} ${t('characters')}`),
      trigger: 'blur'
    })
  }

  /**
   * 校验枚举
   * @param enumList 枚举列表
   * @param rule 校验规则
   * @returns `必须是${enumList.join('、')}`
   */
  enum(
    enumList: string[],
    rule = {} as Omit<ValidatorRule, 'type' | 'enum'>
  ): Omit<this, 'enum'> {
    return this.generateFn(rule, {
      type: 'enum',
      enum: enumList,
      message: rule.message || (() => t('must-be') + enumList.join('、')),
      trigger: 'blur'
    })
  }

  /**
   * 自定义匹配
   * @param pattern 自定义正则表达式或字符串
   * @param message 提示消息
   * @param rule 校验规则
   * @returns ${message}
   */
  match(
    pattern: RegExp | string,
    message: string,
    rule = {} as Omit<ValidatorRule, 'pattern' | 'message' | 'renderMessage'>
  ): this {
    return this.generateFn(rule, {
      pattern,
      message,
      trigger: 'blur'
    })
  }

  /** 返回校验规则 */
  val() {
    return Object.freeze(this.rules) as ValidatorRule
  }
}

/**
 * form表单校验规则
 * @param rule 校验规则
 * @returns Validator实例对象
 */
export const validator = (rule?: ValidatorRule) => new Validator(rule)

export default boot(({ app }) => {
  app.config.globalProperties.$validator = validator
})

declare module '@vue/runtime-core' {
  export interface ComponentCustomProperties {
    $validator: typeof validator
  }
}

