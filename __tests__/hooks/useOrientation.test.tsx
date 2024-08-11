import { renderHook } from '@testing-library/react-native';
import useOrientation from '@hooks/useOrientation';


const mockWindowDimensions = ({ width, height }: {width: number, height: number}) => {
    jest.resetModules();
    jest.doMock('react-native/Libraries/Utilities/useWindowDimensions', () => {
      return {
        default: jest.fn(() => ({ width, height }))
      };
    });
  };

describe('useOrientation', () => {



  it('should return isLandscape as true when width > height', () => {
    mockWindowDimensions({ width: 800, height: 600 });
    
    const { result } = renderHook(() => useOrientation());
    
    expect(result.current.isLandscape).toBe(true);
  });


  it('should return isLandscape as false when width <= height', () => {
    mockWindowDimensions({ width: 600, height: 800 });
    
    const { result } = renderHook(() => useOrientation());
    
    expect(result.current.isLandscape).toBe(false);
  });
  
});
