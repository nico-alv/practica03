<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\hobby;
use App\Models\framework;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class profile extends Model
{
    use HasFactory;
    public $timestamps = false;
    
    protected $fillable = ["name", "lastname", "email", "city", "country", "summary"];

    public function frameworks(): BelongsToMany
    {
        return $this->belongsToMany(framework::class, "profile_framework");
    }

    public function hobbies(): BelongsToMany
    {
        return $this->belongsToMany(hobby::class, "profile_hobby");
    }
}