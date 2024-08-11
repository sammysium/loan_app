import axios from 'axios';

class HTTPCaller {
  

  post = async (url: string, body: any) => {
 
    try {
     
      return await axios.post(url, body);
    } catch (error) {
      throw error
    }
  };

}

const httpCalls = new HTTPCaller();

export default httpCalls;
