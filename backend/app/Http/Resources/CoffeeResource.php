<?php

namespace App\Http\Resources;

use App\Models\User;
use Illuminate\Http\Resources\Json\JsonResource;

class CoffeeResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public static $wrap='Coffee: ';
    public function toArray($request)
    {
        return [
            'id'=>$this->resource->id,
            'coffe_name'=>$this->resource->coffe_name,
            'coffe_sort'=>$this->resource->coffe_sort,
            'country_origin'=>$this->resource->country_origin,
            'description'=>$this->resource->description,
            'user_id'=>new UserResource(User::find($this->resource->user_id)),
            'created_at'=>$this->resource->created_at,
            'updated_at'=>$this->resource->updated_at,
        ];
    }
}
