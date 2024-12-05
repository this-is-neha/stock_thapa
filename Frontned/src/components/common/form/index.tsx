import { useController } from "react-hook-form"
import Select from 'react-select';
interface TextInputProps {
  type?: string,
  name: string,
  errMsg: string,
  required: boolean,
  control: any

}
export const TextInputField = ({ control, type = "text", name, errMsg, required = true }: TextInputProps) => {

  const { field } = useController({
    control: control,
    name: name,
    rules: {
      required: required
    }
  })
  return (

    <>

      <input
        id={name}
        type={type}
        {...field}
        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      />
      <span className="text-red-500">{errMsg}</span>
    </>
  )
}



export const SelectComponent = ({ errMsg = null, name, control, options = [] }: { errMsg?: string | null, options?: any[], name: string, control: any }) => {

  const { field } = useController({
    control: control,
    name: name
  })

  return (
    <>
      <select
        className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
        {...field}
      >
        <option value="">-- Select one --</option>
        <option value="admin">admin</option>
        <option value="user">user</option>
      </select>

      <span className="text-red-500">{errMsg}</span>

    </>
  )
}



export const SelectOptionComponent = ({ errMsg = null, name, control, options = [] }: { errMsg?: string | null, options?: any[], name: string, control: any }) => {
  console.log(errMsg)
  const { field } = useController({
    control: control,
    name: name
  })

  return (
    <>
      <Select options={options} {...field} isClearable={true} />
      <span className="text-red-500">{errMsg}</span>

    </>
  )
}





