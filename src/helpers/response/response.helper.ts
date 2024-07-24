export class ResponseHelper {
  public static successData(data: any, statusCode: number = 200) {
    return {
      statusCode: statusCode,
      status: "success",
      data: data,
    };
  }
  
  public static successMessage(message: string, statusCode: number = 200) {
    return {
      statusCode: statusCode,
      status: "success",
      message: message,
    };
  }
  
  public static errorData(data: any, statusCode: number = 400) {
    return {
      statusCode: statusCode,
      status: "failed",
      data: data,
    };
  }

  public static errorMessage(message: any, statusCode: number = 400) {
    return {
      statusCode: statusCode,
      status: "failed",
      message: message,
    };
  }
}
