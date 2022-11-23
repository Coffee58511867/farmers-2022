import {
  FormControl,
  FormLabel,
  Input,
  VStack,
  SimpleGrid,
  GridItem,
  Button,
  HStack,
  Show,
  Image,
  Link,
  Text,
  Flex,
  Hide,
  Heading,
  Box,
} from "@chakra-ui/react";
import Header from "./Header";
import { IUser } from "../interfaces/IUser";
import { useForm } from "react-hook-form";
import "../styles/Error.css";
import "../styles/fontStyle.css";
import crop from "../images/crop.jpg";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<IUser>();

  const onSubmit = async (data: IUser) => {
    console.log({ data });
  };

  const uploadError = {
    Password: {
      required: "Password is required",
    },
    username: {
      required: "Username is required",
    },
  };

  return (
    <div>
      <Header />
      <Flex
        w="full"
        h="full"
        bg="#DAF7A6"
        p={10}
        alignItems="flex-start"
        direction={{ base: "column", md: "row" }}
      >
        <VStack>
          <Hide above="sm">
            <Heading mb="5" size="lg">
              Sign in
            </Heading>
          </Hide>
        </VStack>
        <Box w="full" mr={20}>
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <SimpleGrid
              columns={2}
              columnGap={3}
              rowGap={6}
              w="full"
              py={35}
              ml={[0, 0, 50]}
            >
              <GridItem colSpan={{ base: 2, md: 1 }}>
                <FormControl isRequired>
                  <FormLabel fontWeight={500} className="label">
                    Username
                  </FormLabel>
                  <Input
                    placeholder="Doe"
                    bg="whiteAlpha.900"
                    {...register("username", uploadError.username)}
                  />
                  {errors?.username && (
                    <p className="error">{errors.username.message}</p>
                  )}
                </FormControl>
                <FormControl isRequired>
                  <FormLabel fontWeight={500} className="label">
                    Password
                  </FormLabel>
                  <Input
                    placeholder="Farmer@2020"
                    bg="whiteAlpha.900"
                    {...register("password", uploadError.Password)}
                  />
                  {errors?.password && (
                    <p className="error">{errors.password.message}</p>
                  )}
                </FormControl>

                <Button
                  size="lg"
                  w="full"
                  mt="2rem"
                  isLoading={isSubmitting}
                  colorScheme="brand"
                  type="submit"
                >
                  Submit
                </Button>
                <HStack>
                  <Text fontSize={[20, 17, 25]}>
                    Not registered? sign up{" "}
                    <Link
                      href="/register/user"
                      color="#1C6B28"
                      fontWeight={800}
                    >
                      here
                    </Link>
                  </Text>
                </HStack>
              </GridItem>
            </SimpleGrid>
          </form>
        </Box>
        <Show above="md">
          <Image src={crop} />
        </Show>
      </Flex>
    </div>
  );
}
export default Login;
