const mockData = {
  userEmail: {
    email: 'test@mymail.com'
  },
  changePasswordDetails: {
    newPassword: 'password',
    confirmPassword: 'password',
    email: 'example@gmail.com'
  },
  loginDetails: {
    email: 'sample@mail.com',
    password: 'password'
  },
  loginDetailsError: {
    email: '',
    password: 'password'
  },
  empty: '',
  authResponse: {
    data: {
      isPasswordChangeRequired: false,
      isSuccessful: true,
      isVerified: true,
      responseMessage: 'Login Successfully',
      statusCode: 200
    }
  },
  loginError: {
    response: {
      data: {
        isPasswordChangeRequired: false,
        isSuccessful: false,
        isVerified: false,
        responseMessage: 'Invalid Credentials',
        statusCode: 401
      }
    }
  },
  wrongLoginDetails: {
    email: '',
    password: 'password'
  },
  resetPasswordError: 'Customer Not Found',
  PasswordReset: 'Success! kindly check your email',
  changePasswordError: 'Customer Not Found',
  PasswordChange: 'Password has been change successfully.',
  otpDetails: {
    otp: '32456980',
    otpRef: 1,
    customerId: 17
  },
  verifyOtpError: 'Customer verification failed, invalid token.',
  completeRegistration: 'Success! registration completed.',
  bvnDetails: {
    customerId: 2,
    bvn: '11111111111'
  },
  addBvnDetails: {
    customerId: 92,
    date_of_birth: '01-jan-1988',
    bvn: '11111111111'
  },
  allBankList: [{
    bankCode: '000',
    bankName: 'Access Bank Nigeria'
  },
  {
    bankCode: '111',
    bankName: 'First Bank Nigeria'
  }
  ],
  bankDetails: {
    accountNo: '',
    bankCode: '111'
  }

};

export default mockData;
