import { NextFunction, Request, Response } from "express";
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getProductsById,
  SearchProducts,
  updateProduct,
} from "../services/product.services.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { sendResponse } from "../utils/sendResponse.js";

// export const getProduct = async (req:Request, res:Response): Promise <void>=>{
// const products = await getAllProducts();

// res.status(200).json({
//     success:200,
//     message: 'Products fetched Successfully',
//     total: products.length,
//     data: products
// })

// }

// custom middleware
// export const getProduct = async (
//   req: Request,
//   res: Response,
//   next: NextFunction,
// ): Promise<void> => {
//   try {
//     const products = await getAllProducts();

//     res.status(200).json({
//       success: true,
//       message: "Products fetched Successfully",
//       total: products.length,
//       data: products,
//     });
//   } catch (err:unknown) {
//     next(err);
//   }
// };
// asyncHandaler function instead of try and catch

export const getProduct = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const products = await getAllProducts();

    // res.status(200).json({
    //     success:true,
    //     message: 'Products fetched Successfully',
    //     total: products.length,
    //     data: products
    // })



    // sendResponse function is from utils/sendResponse.ts
    
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "product fetched Successfully",
      data: products,
    });
  },
);

export const getSingleProduct = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const id = Number(req.params.id);
  const product = await getProductsById(id);

  if (!product) {
    res.status(404).json({
      success: false,
      message: "Product not found",
    });
    return;
  }

  res.status(200).json({
    success: true,
    data: product,
  });
};

export const searchProductByName = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const title = req.query.title as string;

  const result = await SearchProducts(title);

  res.status(200).json({
    success: true,
    total: result.length,
    data: result,
  });
};

export const insertProduct = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const product = await createProduct(req.body);

  res.status(201).json({
    success: true,
    message: "product created successfully",
    data: product,
  });
};

export const updateSingleProduct = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const id = Number(req.params.id);

  const updatedProduct = await updateProduct(id, req.body);

  if (!updatedProduct) {
    res.status(404).json({
      success: false,
      message: "Product not found",
    });
    return;
  }

  res.status(200).json({
    success: true,
    message: "product updated successfully",
    data: updateProduct,
  });
};

// delete method
export const deleteSingleProduct = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const id = Number(req.params.id);

  const deletedProduct = await deleteProduct(id);

  if (!deleteProduct) {
    res.status(404).json({
      success: false,
      message: "Product not found ",
    });
    return;
  }
  res.status(200).json({
    success: true,
    message: "product deleted successfully ",
    data: deleteProduct,
  });
};
