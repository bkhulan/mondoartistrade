import { useIntl } from "react-intl";

const useMessage = () => {
  const intl = useIntl();
  return intl.formatMessage;
};

export default useMessage;
