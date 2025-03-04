import config from '@/config/config'

const AppName = () => {
  return (
    <h1 className="font-Poppins-Bold uppercase text-xl tracking-wider text-primary-500">
    {config.appName}
  </h1>
  )
}

export default AppName
