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
import validateNames from "../constants/validate";
import crop from "../images/crop.jpg";
import Footer from "./Footer";

const validate = validateNames();

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<IUser>();

  const onSubmit = async (data: IUser) => {
    console.log({ data });
  };

  const uploadError = {
    name: {
      required: "First name is required",
      minLength: 3,
      pattern: {
        value: validate,
        message: "Invalid character!!",
      },
    },
    username: {
      required: "Username is required",
    },
    age: {
      required: "Age is required",
    },
    Password: {
      required: "Password is required",
      minLength: {
        value: 8,
        message: "Password is atleast 8 characters long",
      },
      pattern: {
        value:
          /^(?=.*[0-9])(?=.*[!@#$%^&*.,])[a-zA-Z0-9!@#$%^&*.,]{6,16}$/,
        message:
          "Password Must Contain Atleast 6 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character",
      },
    },
    state: {
      required: "State is required",
    },
    city: {
      required: "City is required",
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
              Register
            </Heading>
          </Hide>
        </VStack>
        <Box w="full" mr={20}>
          {/* <Box mr={340}>
          <Show above="md">
            <Heading>New User</Heading>
            <Text ml={5}>Create a new account here</Text>
          </Show>
          </Box> */}
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <SimpleGrid
              columns={2}
              columnGap={3}
              rowGap={6}
              w="full"
              py={25}
              ml={[0, 0, 50]}
            >
              <GridItem colSpan={{ base: 2, md: 1 }}>
                <FormControl isRequired>
                  <FormLabel fontWeight={500} className="label">
                    Name
                  </FormLabel>
                  <Input
                    placeholder="John"
                    bg="whiteAlpha.900"
                    {...register("name", uploadError.name)}
                  />
                  {errors?.name && (
                    <p className="error">{errors.name.message}</p>
                  )}
                  {errors?.name?.type === "minLength" && (
                    <p className="error">
                      Name must be at least 3 characters long
                    </p>
                  )}
                </FormControl>
              </GridItem>
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
              </GridItem>
              <GridItem colSpan={{ base: 2, md: 1 }}>
                <FormControl isRequired>
                  <FormLabel fontWeight={500} className="label">
                    Password
                  </FormLabel>
                  <Input
                    placeholder="Farmer@2023"
                    bg="whiteAlpha.900"
                    {...register("password", uploadError.Password)}
                  />
                  {errors?.password && (
                    <p className="error">{errors.password.message}</p>
                  )}
                </FormControl>
              </GridItem>
              <GridItem colSpan={{ base: 2, md: 1 }}>
                <FormControl isRequired>
                  <FormLabel fontWeight={500} className="label">
                    Confirm Password
                  </FormLabel>
                  <Input
                    placeholder="56214440"
                    bg="whiteAlpha.900"
                    {...register("confirm", uploadError.Password)}
                  />
                  {errors?.confirm && (
                    <p className="error">{errors.confirm.message}</p>
                  )}
                </FormControl>
              </GridItem>
              <GridItem colSpan={{ base: 2, md: 1 }}>
                <FormControl isRequired>
                  <FormLabel fontWeight={500} className="label">
                    Age{" "}
                  </FormLabel>
                  <Input
                    placeholder="34 Years"
                    bg="whiteAlpha.900"
                    {...register("age", uploadError.age)}
                  />
                  {errors?.age && <p className="error">{errors.age.message}</p>}
                </FormControl>
              </GridItem>
              <GridItem colSpan={{ base: 2, md: 1 }}>
                <FormControl isRequired>
                  <FormLabel fontWeight={500} className="label">
                    State
                  </FormLabel>
                  <Input
                    placeholder="India"
                    bg="whiteAlpha.900"
                    {...register("state", uploadError.state)}
                  />
                  {errors?.state && (
                    <p className="error">{errors.state.message}</p>
                  )}
                </FormControl>
              </GridItem>
              <GridItem colSpan={{ base: 2, md: 1 }}>
                <FormControl isRequired>
                  <FormLabel fontWeight={500} className="label">
                    City
                  </FormLabel>
                  <Input
                    placeholder="New Delhi"
                    bg="whiteAlpha.900"
                    {...register("city", uploadError.city)}
                  />
                  {errors?.city && (
                    <p className="error">{errors.city.message}</p>
                  )}
                </FormControl>
              </GridItem>
              <SimpleGrid columns={3} spacing={10}>
                {/* <FormControl isRequired>
                  <FormLabel fontWeight={800} className="label">
                    shop name
                  </FormLabel>
                  <Input
                    placeholder="Farm Products"
                    {...register("shopName", uploadError.shopName)}
                  />
                  {errors?.shopName && (
                    <p className="error">{errors.shopName.message}</p>
                  )}
                </FormControl>
                <FormControl isRequired>
                  <FormLabel fontWeight={800} className="label">
                    shop name
                  </FormLabel>
                  <Input
                    placeholder="Farm Products"
                    {...register("shopName", uploadError.shopName)}
                  />
                  {errors?.shopName && (
                    <p className="error">{errors.shopName.message}</p>
                  )}
                </FormControl>
                <FormControl isRequired>
                  <FormLabel fontWeight={800} className="label">
                    shop name
                  </FormLabel>
                  <Input
                    placeholder="Farm Products"
                    {...register("shopName", uploadError.shopName)}
                  />
                  {errors?.shopName && (
                    <p className="error">{errors.shopName.message}</p>
                  )}
                </FormControl> */}
              </SimpleGrid>
              <GridItem colSpan={{ base: 2, md: 1 }}>
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
                    Already signed up? Login{" "}
                    <Link href="/login" color="#1C6B28" fontWeight={800}>
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
      <Footer />
    </div>
  );
}
export default Register;
