<?php

namespace App\Rules;

use App\Models\UserRole;
use Illuminate\Contracts\Validation\Rule;

class UserRoleExsist implements Rule
{
    /**
     * Create a new rule instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Determine if the validation rule passes.
     *
     * @param  string  $attribute
     * @param  mixed  $value
     * @return bool
     */
    public function passes($attribute, $value)
    {
        $userRole = UserRole::find($value);
        return $userRole!=null;
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        return 'User role doesnt exsist!';
    }
}
