

// This function takes the language type as string ('ar' , 'en' , etc...) and return the right direction (ltr,rtl) 
export function detectLanguage(lang) {
    switch (lang) {
        case 'ar':
            return 'rtl';
            break;
            case 'en':
                return 'ltr';
                break;
        default:
            return 'ar';
    }
}