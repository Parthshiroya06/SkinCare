import { View, Text } from 'react-native'
import React, { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react'
import { useTheme } from '@react-navigation/native';
import RBSheet from 'react-native-raw-bottom-sheet';
import FilterSheet2 from '../../components/BottomSheet/FilterSheet';
import GenderSheet2 from '../../components/BottomSheet/GenderSheet';
// import ShortSheet2 from '../../components/BottomSheet/ShortSheet';
// import GenderSheet2 from '../../components/BottomSheet/GenderSheet';
import LanguageoptionSheet from '../../components/BottomSheet/LanguageoptionSheet';
import ShortSheet2 from '../../components/BottomSheet/ShortShreet';


// type Props = {
//    height ?: string,
// }

const BottomSheet2 = forwardRef((Props, ref) => {

    const theme = useTheme();
    const {colors} = theme;

    const rbsheetRef = useRef();

    const [sheetType, setSheetType ] = useState('');
    

    useImperativeHandle(ref, () => ({

        openSheet : async (value) => {
            await setSheetType(value);
            await rbsheetRef.current.open();
        },
        closeSheet() {
            rbsheetRef.current.close();
        }
    
    }));


    return(

        <>
            <RBSheet
                ref={rbsheetRef}
                closeOnDragDown={true}
                height={sheetType === "gender" ? 150 :
                        sheetType === "short" ? 150 :
                        sheetType === "filter" ? 600 :
                        sheetType === "Language" ? 300 : 200}
                openDuration={100}
                customStyles={{
                    
                    container: {
                        backgroundColor: colors.background,
                        borderTopRightRadius:25,
                        borderTopLeftRadius:25
                    },
                    draggableIcon: {
                        marginTop:10,
                        marginBottom:0,
                        height:5,
                        width:92,
                        backgroundColor: theme.dark ? 'rgba(255,255,255,0.30)' : 'rgba(0, 0, 0, 0.30)',
                    }
                }}
            >
                {(sheetType === "gender") &&
                    <GenderSheet genderRef={rbsheetRef} />
                }
                {(sheetType === "short") &&
                    <ShortSheet ShortRef={rbsheetRef}/>
                }
                {(sheetType === "filter") &&
                    <FilterSheet  sheetRef={rbsheetRef}/>
                }
                {(sheetType === "Language") &&
                    <LanguageSheet setLanguage={Props.setLanguage} sheetRef={rbsheetRef}/>
                }
            </RBSheet>
        </>
    )
});


const ShortSheet = ({ ShortRef }) => {
    return(
        <View>
            <ShortSheet2
                shortRef={ShortRef}
            />
        </View>
    )
}

const GenderSheet = ({ genderRef }) => {
    return(
        <View>
            <GenderSheet2
                genderRef={genderRef}
            />
    </View>
    )
}

const FilterSheet = ({ sheetRef }) => {
    return(
        <View>
            <FilterSheet2
                sheetRef={sheetRef}
            />
        </View>
    )
}

const LanguageSheet = ({ moresheet, setLanguage,sheetRef }) => {
    return(
        <View>
            <LanguageoptionSheet
                setLanguage={setLanguage}
                moresheet={moresheet}
                sheetRef={sheetRef}
            />
        </View>
    )
}

export default BottomSheet2