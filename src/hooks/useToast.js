import { useCallback, useMemo } from 'react';
import { toast, Slide } from 'react-toastify';
import { nanoid } from 'nanoid';
import { Toast } from '../components/core/toast/Toast';
import { TOAST_VARIANTS } from '../constants/toastVariants';

export const useToast = () => {
    const handleClose = useCallback(
        toastId => () => toast.dismiss(toastId),
        []
    );

    const opts = useMemo(
        () => ({
            position: toast.POSITION.TOP_CENTER,
            hideProgressBar: false,
            transition: Slide,
            closeOnClick: false,
            closeButton: false,
            autoClose: 3500,
        }),
        []
    );

    const renderToast = useCallback(
        (content, variant, toastId) => {
            toast(
                <Toast variant={variant} onClose={handleClose(toastId)}>
                    {content}
                </Toast>,
                {
                    ...opts,
                    toastId,
                }
            );
        },
        [handleClose, opts]
    );

    const success = useCallback(
        content => renderToast(content, TOAST_VARIANTS.SUCCESS, nanoid()),
        [renderToast]
    );
    const error = useCallback(
        content => renderToast(content, TOAST_VARIANTS.SUCCESS, nanoid()),
        [renderToast]
    );

    return { success, error };
};