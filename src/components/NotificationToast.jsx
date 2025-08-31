import { toast } from 'react-toastify'


export const notifySuccess = (msg) => toast.success(msg || 'Success')
export const notifyError = (msg) => toast.error(msg || 'Error')