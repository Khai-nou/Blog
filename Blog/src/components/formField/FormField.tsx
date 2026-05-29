import styles from './FormField.module.scss'
import type { FormFieldProps } from '../../types'

export function FormField({ id, label, type, value, valueChecked, onChange, ref }: FormFieldProps): React.ReactElement {
  
  const renderInputTypeCheckbox = () => (
    <div>
      <input
        ref={ref}
        className={styles.formField}
        type="checkbox"
        id={id}
        checked={valueChecked}
        onChange={onChange} />
      {label && <label htmlFor={id}>{label}</label>}
    </div>
  )

  const renderInput = () => (
    <>
      {label && <label htmlFor={id}>{label}</label>}
      <input
        ref={ref}
        className={styles.formField}
        type={type}
        id={id || crypto.randomUUID()}
        value={value}
        onChange={onChange} />
    </>
  )

  if (type === 'checkbox') {
    return renderInputTypeCheckbox()
  }

  return renderInput()
}