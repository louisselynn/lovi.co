"use client";

import React, { useState } from 'react'
import { Input } from './ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue}  from "@/components/ui/select"
import { Switch } from './ui/switch';
import { Button } from './ui/button';

const CreateProductForm = () => {
  const [imageNum, setImageNum] = useState(1);
  const errors = [''];

  const addImage = () => {
    setImageNum(imageNum + 1);
  }

  const removeImage = () => {
    if (imageNum > 1) {
      setImageNum(imageNum - 1);
    }
  }

  return (
    <form  className="px-24">
      <div>
        <label htmlFor="name" className="startup-form_label">
          Name
        </label>
        <Input
          id="name"
          name="name"
          className="startup-form_input"
          required
          placeholder="Product Name"
        />
        
        {errors.title && <p className="startup-form_error">{errors.title}</p>}
      </div>

      <div>
        <label htmlFor="description" className="startup-form_label">
          Description
        </label>
        <Input
          id="description"
          name="description"
          className="startup-form_input"
          required
          placeholder="Product Description"
        />
        
        {errors.description && <p className="startup-form_error">{errors.description}</p>}
      </div>

      <div>
        <label htmlFor="category" className="startup-form_label">
          Category
        </label>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="men">Men</SelectItem>
            <SelectItem value="women">Women</SelectItem>
            <SelectItem value="kids">Kids</SelectItem>
            <SelectItem value="accessories">Accessories</SelectItem>
          </SelectContent>
        </Select>
        
        {errors.category && <p className="startup-form_error">{errors.category}</p>}
      </div>

      <div>
        <label htmlFor="tags" className="startup-form_label">
          Tags
        </label>
        <Input
          id="tags"
          name="tags"
          className="startup-form_input"
          required
          placeholder="Separate each tag with a comma i.e.(christmas, sweater)"
        />
        
        {errors.tags && <p className="startup-form_error">{errors.tags}</p>}
      </div>


      <div className='flex py-3 gap-2'>
        <Switch id="publish"/>
        <label htmlFor="publish" className="startup-form_label">
          Publish
        </label>        
        {errors.publish && <p className="startup-form_error">{errors.publish}</p>}
      </div>

      <div>
        { Array.from({ length: imageNum }, (_, index) => (
          <div key={index} className='flex gap-5 py-2'>
            <Input
            id="image"
            name="image"
            className="startup-form_input"
            required
            placeholder="https://image-URL.com"
            />
            {(imageNum > 1 && 
            <Button className='w-10 rounded-full' onClick={removeImage}>x</Button>)}
          </div>
        ))}
        { imageNum >= 3 ? (
          <p className='text-red-400 text-[12px]'>Maximum of 3 images only.</p>
        ): (
          <div>
            <Button className='w-[100px]' onClick={addImage}>Add Image</Button>
          </div>
        )}
      </div>
      
      
      <div>
        <label htmlFor="tags" className="startup-form_label">
          Tags
        </label>
        <Input
          id="tags"
          name="tags"
          className="startup-form_input"
          required
          placeholder="Separate each tag with a comma i.e.(christmas, sweater)"
        />
        
        {errors.tags && <p className="startup-form_error">{errors.tags}</p>}
      </div>


      
    </form>
  )
}

export default CreateProductForm