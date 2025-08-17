const FormCheckbox = ({ label, name, defaultValue, size }) => {
  return (
    <div className='form-control px-20'>
      <label htmlFor={name} className='label cursor-pointer'>
        <span className='label-text capitalize'>{label}</span>
      </label>
      <div className='px-10'>
        <input
          type='checkbox'
          name={name}
          defaultChecked={defaultValue}
          className={`checkbox checkbox-primary ${size}`}
        />
      </div>
    </div>
  )
}

export default FormCheckbox
