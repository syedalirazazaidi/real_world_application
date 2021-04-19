import React, { FC, useState } from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Button,
} from "@chakra-ui/react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  username: yup
    .string()
    .required("What? No username?")
    .max(16, "Username cannot be longer than 16 characters"),
  password: yup.string().required('Without a password, "None shall pass!"'),
  email: yup.string().email("Please provide a valid email address (abc@xy.z)"),
});

type LoginFormInputs = {
  email: string;
  password: string;
  username: string;
};

const Auth: FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const methods = useForm<LoginFormInputs>({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });
  console.log(methods);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit = (values: LoginFormInputs) =>
    console.log(values, "YOUR DATA");

  const path = isLogin ? "/auth/login" : "/auth/signup";

  return (
    <div className="card">
      <form style={{ width: 350 }}>
        <FormControl
          isInvalid={!!errors?.email?.message}
          errortext={errors?.email?.message}
          p="4"
          isRequired
        >
          <FormLabel>Username</FormLabel>
          <Input
            type="username"
            placeholder="Username"
            {...register("username")}
          />
          <FormErrorMessage>{errors?.username?.message}</FormErrorMessage>
        </FormControl>
        <FormControl
          isInvalid={!!errors?.username?.message}
          errortext={errors?.username?.message}
          px="4"
          pb="4"
          isRequired
        >
          <FormLabel>Password</FormLabel>
          <Input
            {...register("password")}
            type="password"
            placeholder="Password"
            name="password"
          />
          <FormErrorMessage>{errors?.password?.message}</FormErrorMessage>
        </FormControl>
        {!isLogin && (
          <FormControl
            isInvalid={!!errors?.email?.message}
            errortext={errors?.email?.message}
            p="4"
          >
            <FormLabel>Email</FormLabel>
            <Input
              {...register("email")}
              type="email"
              placeholder="Email"
              name="email"
            />
            <FormErrorMessage>{errors?.email?.message}</FormErrorMessage>
          </FormControl>
        )}
        <Button
          onClick={handleSubmit(onSubmit)}
          p="4"
          mx="4"
          mt="6"
          w="90%"
          colorScheme="blue"
          variant="solid"
          disabled={!!errors.email || !!errors.password}
        >
          {isLogin ? "Login" : "Create account"}
        </Button>
        <p
          onClick={() => setIsLogin(!isLogin)}
          style={{ cursor: "pointer", opacity: 0.7 }}
        >
          {isLogin ? "No account? Create one" : "Already have an account?"}
        </p>
      </form>
    </div>
  );
};
export default Auth;
